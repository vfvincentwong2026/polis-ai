#!/usr/bin/env bash
# PolisAI — Codespaces startup (postStartCommand, also safe to run manually).
# Idempotent: starts Ollama, the self-hosted Convex backend (Docker),
# two Cloudflare quick tunnels (public URLs), pushes functions, seeds the
# 10 political figures, resumes the engine, and starts the frontend.
# Re-run any time (e.g. after a codespace restart) to rebuild everything.
cd "$(dirname "$0")/.."

echo "==> [1/7] Ollama (bind 0.0.0.0 so the backend container can reach it)"
if ! curl -sf -m 3 http://127.0.0.1:11434/api/version >/dev/null 2>&1; then
  OLLAMA_HOST=0.0.0.0 nohup ollama serve > /tmp/ollama.log 2>&1 &
  sleep 4
fi

echo "==> [2/7] Self-hosted Convex backend (Docker, no Convex account needed)"
if ! curl -sf -m 3 http://127.0.0.1:3210/version >/dev/null 2>&1; then
  OLLAMA_PORT=11435 docker compose up -d backend
  for i in $(seq 1 30); do
    curl -sf -m 3 http://127.0.0.1:3210/version >/dev/null 2>&1 && break
    sleep 4
  done
fi

echo "==> [3/7] First-time config: admin key + .env.local + LLM env"
if ! grep -q CONVEX_SELF_HOSTED_ADMIN_KEY .env.local 2>/dev/null; then
  KEY=$(docker compose exec -T backend ./generate_admin_key.sh 2>/dev/null | tail -1 | tr -d '\r')
  cat > .env.local <<EOF
# Self-hosted Convex backend (Docker) — no account required
CONVEX_SELF_HOSTED_URL=http://127.0.0.1:3210
CONVEX_SELF_HOSTED_ADMIN_KEY=${KEY}
EOF
  # Convex actions run inside the backend container; Ollama lives on the host.
  npx convex env set OLLAMA_HOST http://host.docker.internal:11434
  npx convex env set OLLAMA_MODEL "${OLLAMA_MODEL:-llama3.2:3b}"
  npx convex env set OLLAMA_EMBEDDING_MODEL "${OLLAMA_EMBEDDING_MODEL:-mxbai-embed-large}"
fi

echo "==> [4/7] Cloudflare tunnels (public URLs, no login required to view)"
ARCH=$(uname -m); case "$ARCH" in aarch64|arm64) ARCH=arm64;; *) ARCH=amd64;; esac
CF=/tmp/cloudflared
if [ ! -x "$CF" ]; then
  curl -fsSL -o "$CF" "https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-${ARCH}"
  chmod +x "$CF"
fi

start_tunnel() { # port pidfile logfile
  if [ -f "$2" ] && kill -0 "$(cat "$2")" 2>/dev/null; then return 0; fi
  nohup "$CF" tunnel --url "http://127.0.0.1:$1" --no-autoupdate > "$3" 2>&1 &
  echo $! > "$2"
}
tunnel_url() { # logfile -> prints https://xxx.trycloudflare.com once it appears
  for i in $(seq 1 20); do
    URL=$(grep -oE 'https://[a-z0-9-]+\.trycloudflare\.com' "$1" | head -1)
    [ -n "$URL" ] && { echo "$URL"; return 0; }
    sleep 2
  done
  return 1
}

start_tunnel 3210 /tmp/cf-backend.pid /tmp/cf-backend.log
BACKEND_URL=$(tunnel_url /tmp/cf-backend.log) || { echo "!! backend tunnel failed, see /tmp/cf-backend.log"; exit 1; }

# Point the frontend at the (possibly new) public backend URL.
if grep -q '^VITE_CONVEX_URL=' .env.local 2>/dev/null; then
  sed -i "s|^VITE_CONVEX_URL=.*|VITE_CONVEX_URL=${BACKEND_URL}|" .env.local
else
  echo "VITE_CONVEX_URL=${BACKEND_URL}" >> .env.local
fi

echo "==> [5/7] Push functions, seed the world, wake the engine (idempotent)"
node scripts/generate-agents.mjs
npx convex dev --once
npx convex run init || true
npx convex run testing:resume || true

echo "==> [6/7] Frontend (vite on :5173, restart only if backend URL changed)"
VITE_URL_FILE=/tmp/vite-convex-url.txt
if ! curl -sf -m 3 -o /dev/null http://127.0.0.1:5173/ai-town \
   || [ "$(cat "$VITE_URL_FILE" 2>/dev/null)" != "$BACKEND_URL" ]; then
  fuser -k 5173/tcp 2>/dev/null || true
  # Wait until the port is really free (fuser kill is async; a half-dead
  # listener would make vite --strictPort crash with EADDRINUSE).
  for i in $(seq 1 15); do
    fuser 5173/tcp >/dev/null 2>&1 || break
    sleep 1
  done
  nohup npx vite --host 0.0.0.0 --strictPort > /tmp/vite.log 2>&1 &
  echo "$BACKEND_URL" > "$VITE_URL_FILE"
  # Wait until vite actually serves, so the tunnel never hits a dead origin.
  for i in $(seq 1 20); do
    curl -sf -m 3 -o /dev/null http://127.0.0.1:5173/ai-town && break
    sleep 2
  done
fi

echo "==> [7/7] Public frontend tunnel"
start_tunnel 5173 /tmp/cf-front.pid /tmp/cf-front.log
FRONT_URL=$(tunnel_url /tmp/cf-front.log) || { echo "!! frontend tunnel failed, see /tmp/cf-front.log"; exit 1; }

echo ""
echo "=============================================="
echo "  PolisAI is up — share this link (no login):"
echo "  ${FRONT_URL}/ai-town"
echo "  (backend: ${BACKEND_URL})"
echo "=============================================="
