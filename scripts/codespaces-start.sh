#!/usr/bin/env bash
# PolisAI — GitHub Codespaces startup (postStartCommand)
# Ensures Ollama is running, then launches backend + frontend in background.
cd "$(dirname "$0")/.."

if ! curl -sf http://127.0.0.1:11434/api/version >/dev/null 2>&1; then
  nohup ollama serve > /tmp/ollama.log 2>&1 &
  sleep 3
fi

if ! curl -sf http://127.0.0.1:3210/version >/dev/null 2>&1; then
  nohup npm run dev > /tmp/polisai-dev.log 2>&1 &
  echo "PolisAI starting… watch /tmp/polisai-dev.log"
else
  echo "PolisAI backend already running."
fi
