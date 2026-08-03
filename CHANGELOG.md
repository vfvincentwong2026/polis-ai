# Changelog — PolisAI

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [v0.1.0] — 2026-08-03 — Founding Beta 🏛️

### 🎉 First Public Release

This is the inaugural release of PolisAI — the founding beta for educational collaboration with Yonsei University and partner institutions.

### ✨ Added

#### Core Platform
- AI Town-based multi-agent simulation environment
- 2D visual map with real-time agent movement and dialogue
- Local runtime support (Node.js + Convex)
- Multi-language interface (English + 中文 + 한국어)

#### Sample Agents
- **Winston Churchill** (United Kingdom)
  - Complete persona configuration (`config.json`)
  - 2 knowledge cards: Iron Curtain Speech, Their Finest Hour Speech
- **Nelson Mandela** (South Africa)
  - Complete persona configuration (`config.json`)
  - 1 knowledge card: Rivonia Trial Speech

#### Documentation
- `README.md` — Project overview, quick start, multilingual support
- `INSTALL.md` — Step-by-step installation guide (EN/KO/ZH)
- `CUSTOMIZE.md` — How to create and modify agents (EN/KO/ZH)
- `OBSERVATION.md` — Observation guide with templates (EN/KO/ZH)
- `CONTRIBUTING.md` — Open-source contribution guidelines (EN/KO/ZH)
- `PARTNERSHIP_zh.md` — Chinese collaboration proposal for universities

#### License
- MIT License — fully open source for educational use

### 🔧 Technical Stack

| Component | Technology |
|-----------|------------|
| Framework | a16z AI Town (Generative Agents) |
| Frontend | React + TypeScript + Tailwind |
| Backend | Convex (Cloud BaaS) |
| LLM Support | OpenAI API / Ollama (Local) |
| Runtime | Node.js 18+ |

### 📦 How to Use

```bash
git clone https://github.com/vfvincentwong2026/polis-ai.git
cd polis-ai
npm install
npx convex dev
npm run dev
Open http://localhost:5173
