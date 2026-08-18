#!/usr/bin/env bash
# PolisAI — GitHub Codespaces one-time setup (postCreateCommand)
# Installs Ollama, pulls models, installs npm deps, writes .env.local for
# anonymous local Convex development (no Convex account needed).
set -e
cd "$(dirname "$0")/.."

echo "==> [1/5] npm install"
npm install --no-audit --no-fund

echo "==> [2/5] Install Ollama"
if ! command -v ollama >/dev/null 2>&1; then
  curl -fsSL https://ollama.com/install.sh | sh
fi

echo "==> [3/5] Start Ollama and pull models"
nohup ollama serve > /tmp/ollama.log 2>&1 &
for i in $(seq 1 30); do
  curl -sf http://127.0.0.1:11434/api/version >/dev/null 2>&1 && break
  sleep 1
done
CHAT_MODEL="${OLLAMA_MODEL:-llama3.2:3b}"
EMBED_MODEL="${OLLAMA_EMBEDDING_MODEL:-mxbai-embed-large}"
ollama pull "$CHAT_MODEL"
ollama pull "$EMBED_MODEL"

echo "==> [4/5] Generate political agents data"
node scripts/generate-agents.mjs

echo "==> [5/5] Write .env.local (anonymous local Convex + Ollama)"
DOMAIN="${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN:-app.github.dev}"
if [ -n "$CODESPACE_NAME" ]; then
  PUBLIC_BACKEND_URL="https://${CODESPACE_NAME}-3210.${DOMAIN}"
else
  PUBLIC_BACKEND_URL="http://127.0.0.1:3210"
fi
cat > .env.local <<EOF
# Anonymous local Convex deployment — no account required
CONVEX_DEPLOYMENT=anonymous:anonymous
CONVEX_URL=http://127.0.0.1:3210
VITE_CONVEX_URL=${PUBLIC_BACKEND_URL}
# Local Ollama (free, offline LLM)
OLLAMA_HOST=http://127.0.0.1:11434
OLLAMA_MODEL=${CHAT_MODEL}
OLLAMA_EMBEDDING_MODEL=${EMBED_MODEL}
EOF

echo "==> Setup complete. Frontend backend URL: ${PUBLIC_BACKEND_URL}"
echo "==> Run 'npm run dev' (or it auto-starts via postStartCommand)."
