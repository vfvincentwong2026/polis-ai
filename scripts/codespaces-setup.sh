#!/usr/bin/env bash
# PolisAI — GitHub Codespaces one-time setup (postCreateCommand)
# Installs dependencies, Ollama, and pulls the LLM models.
# Runtime startup is handled by scripts/codespaces-start.sh.
set -e
cd "$(dirname "$0")/.."

echo "==> [1/3] npm install"
npm install --no-audit --no-fund

echo "==> [2/3] Install Ollama"
if ! command -v ollama >/dev/null 2>&1; then
  curl -fsSL https://ollama.com/install.sh | sh
fi

echo "==> [3/3] Pull models"
OLLAMA_HOST=0.0.0.0 nohup ollama serve > /tmp/ollama.log 2>&1 &
for i in $(seq 1 30); do
  curl -sf http://127.0.0.1:11434/api/version >/dev/null 2>&1 && break
  sleep 1
done
ollama pull "${OLLAMA_MODEL:-llama3.2:3b}"
ollama pull "${OLLAMA_EMBEDDING_MODEL:-mxbai-embed-large}"

echo "==> Setup complete. scripts/codespaces-start.sh will start the app."
