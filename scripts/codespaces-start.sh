#!/usr/bin/env bash
# PolisAI — Codespaces startup (postStartCommand, also safe to run manually).
# Idempotent: starts Ollama, the self-hosted Convex backend (Docker),
# pushes functions, seeds the 10 political figures, and starts the frontend.
cd "$(dirname "$0")/.."

echo "==> [1/5] Ollama (bind 0.0.0.0 so the backend container can reach it)"
if ! curl -sf -m 3 http://127.0.0.1:11434/api/version >/dev/null 2>&1; then
  OLLAMA_HOST=0.0.0.0 nohup ollama serve > /tmp/ollama.log 2>&1 &
  sleep 4
fi

echo "==> [2/5] Self-hosted Convex backend (Docker, no Convex account needed)"
if ! curl -sf -m 3 http://127.0.0.1:3210/version >/dev/null 2>&1; then
  OLLAMA_PORT=11435 docker compose up -d backend
  for i in $(seq 1 30); do
    curl -sf -m 3 http://127.0.0.1:3210/version >/dev/null 2>&1 && break
    sleep 4
  done
fi

echo "==> [3/5] First-time config: admin key + .env.local + LLM env"
if ! grep -q CONVEX_SELF_HOSTED_ADMIN_KEY .env.local 2>/dev/null; then
  KEY=$(docker compose exec -T backend ./generate_admin_key.sh 2>/dev/null | tail -1 | tr -d '\r')
  DOMAIN="${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN:-app.github.dev}"
  if [ -n "$CODESPACE_NAME" ]; then
    PUBLIC_BACKEND_URL="https://${CODESPACE_NAME}-3210.${DOMAIN}"
  else
    PUBLIC_BACKEND_URL="http://127.0.0.1:3210"
  fi
  cat > .env.local <<EOF
# Self-hosted Convex backend (Docker) — no account required
CONVEX_SELF_HOSTED_URL=http://127.0.0.1:3210
CONVEX_SELF_HOSTED_ADMIN_KEY=${KEY}
VITE_CONVEX_URL=${PUBLIC_BACKEND_URL}
EOF
  # Convex actions run inside the backend container; Ollama lives on the host.
  npx convex env set OLLAMA_HOST http://host.docker.internal:11434
  npx convex env set OLLAMA_MODEL "${OLLAMA_MODEL:-llama3.2:3b}"
  npx convex env set OLLAMA_EMBEDDING_MODEL "${OLLAMA_EMBEDDING_MODEL:-mxbai-embed-large}"
fi

echo "==> [4/5] Push functions and seed the world (idempotent)"
node scripts/generate-agents.mjs
npx convex dev --once
npx convex run init || true

echo "==> [5/5] Frontend (vite on :5173)"
if ! curl -sf -m 3 -o /dev/null http://127.0.0.1:5173/ai-town; then
  nohup npx vite --host 0.0.0.0 > /tmp/vite.log 2>&1 &
fi

echo "==> PolisAI is up: http://localhost:5173/ai-town"
