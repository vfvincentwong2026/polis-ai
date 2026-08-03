# 🏛️ PolisAI

**AI Political Agent Lab — A Sandbox for Historical Political Intelligence**

> ⚠️ **重要提示**：本仓库代码在 `master` 分支 → [点击查看完整代码](https://github.com/vfvincentwong2026/polis-ai/tree/master)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-v0.1.0-blue.svg)](CHANGELOG.md)
[![Status](https://img.shields.io/badge/status-Founding%20Beta-green.svg)](CHANGELOG.md)
[![Node.js 18+](https://img.shields.io/badge/node.js-18+-green.svg)](https://nodejs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

<div align="center">
  <img src="assets/YonseiLogo.png" alt="Yonsei University Logo" width="180" style="margin-right: 40px;"/>
  <span style="font-size: 24px; font-weight: bold; color: #0046AB;">+</span>
  <span style="font-size: 28px; font-weight: bold; color: #CC0000;">PolisAI</span>
</div>

<p align="center">
  <strong>
    <span style="color: #0046AB;">Yonsei University</span> · 
    <span style="color: #CC0000;">IHPI</span> · 
    <span style="color: #333;">Founding Beta v0.1.0</span>
  </strong>
</p>

---

## 🎮 在线演示（30秒体验）

👉 **[点击这里体验 PolisAI 在线演示](https://sturdy-fishstick-jr5vjqrp54j9h5rx-5173.app.github.dev/ai-town)**

> 无需安装，打开即看。AI 角色在虚拟小镇中自由行走、交谈、辩论。

---

## 📖 Overview

**PolisAI** is an educational AI simulation platform built on [AI Town](https://github.com/a16z-infra/ai-town) by a16z. It allows students to **build, customize, and observe** AI agents representing historical political figures in a virtual parliamentary setting.

> **Core Mission**: Not to make AI *imitate* historical figures, but to make AI *reason* like them — with evidence, logical consistency, and historical integrity.

This project is developed in collaboration with **Yonsei University** for the **Institute for Historical Political Intelligence (IHPI)** curriculum.

**Maintainer**: Vincent Wong ([vfvincentwong@gmail.com](mailto:vfvincentwong@gmail.com))  
**Course Instructor**: Prof. Jenny Zhan ([jennyzhan20@naver.com](mailto:jennyzhan20@naver.com)), Yonsei University

---

## 👨‍🏫 For Teachers

| Task | Action |
|------|--------|
| **Demo in class** | Click the online demo link above |
| **Run locally** | See [Quick Start](#quick-start) below |
| **See what students modify** | Open the `agents/` folder |
| **Learn more** | Read the [docs](docs/) |

---

## 👨‍🎓 For Students

### What You Modify
agents/
└── your_name/ ← Create a folder with your name
├── config.json ← Edit persona (ideology, personality, decision rules)
└── knowledge/ ← Add knowledge cards (Markdown files)
└── kc_001.md

text

### How to Submit Your Work

→ Full guide: [Student Submission Guide](docs/SUBMISSION.md)

---

## 🚀 Quick Start

### Prerequisites

| Software | Version |
|----------|---------|
| Node.js | 18.x or higher |
| Git | Latest |

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/vfvincentwong2026/polis-ai.git
cd polis-ai

# 2. Install dependencies
npm install

# 3. Start the backend
npx convex dev

# 4. Start the frontend (in a new terminal)
npm run dev
Open http://localhost:5173/ai-town in your browser.

📖 Full installation guide: docs/INSTALL.md

🔑 Key Features
Feature	Description
🖥️ Run Locally	No registration required
📝 Editable Knowledge	Update knowledge via Markdown files
🎭 Customizable Persona	Adjust ideology, personality, decision rules via JSON
🗳️ Parliamentary Debate	Trigger multi-agent debates and observe shifts
👁️ Visual Observation	2D map with real-time agent movement and dialogue
🔌 Free to Use	Supports local Ollama models — completely free
🎯 Course Applications
History & Political Intelligence

AI & Social Sciences

Digital Humanities

Political Simulation & Forecasting

📁 Project Structure (Students: Focus on agents/)
text
polis-ai/
├── README.md                 # This file
├── agents/                   # 👈 STUDENT'S MAIN WORKSPACE
│   ├── churchill/            # Sample Agent: Churchill
│   │   ├── config.json       # Persona configuration
│   │   └── knowledge/        # Knowledge base
│   │       ├── kc_001.md
│   │       └── kc_002.md
│   └── mandela/              # Sample Agent: Mandela
│       ├── config.json
│       └── knowledge/
├── docs/
│   ├── INSTALL.md            # Installation guide
│   ├── CUSTOMIZE.md          # Customization guide
│   ├── OBSERVATION.md        # Observation guide
│   └── SUBMISSION.md         # Student submission guide
├── convex/                   # Backend logic (generally don't modify)
├── src/                      # Frontend code (generally don't modify)
├── public/                   # Static assets (generally don't modify)
└── LICENSE                   # MIT License
🎯 How to Customize an Agent
1️⃣ Edit Persona (config.json)
json
{
  "name": "Winston Churchill",
  "era": "20th Century",
  "country": "United Kingdom",
  "ideology": "Conservatism",
  "core_principles": [
    "Resolute opposition to Nazism",
    "Preservation of the British Empire",
    "Priority of democratic institutions"
  ],
  "personality_traits": ["Decisive", "Eloquent", "Stubborn"],
  "decision_rules": [
    "Prefer defensive strategies in military decisions",
    "Favor market-oriented economic policies"
  ],
  "speech_style": "Rhetorically rich, heavy with historical allusion"
}
2️⃣ Edit Knowledge Base (Markdown)
Create or modify agents/your_agent/knowledge/*.md:

markdown
---
id: kc_001
source: "Churchill's Iron Curtain Speech, March 5, 1946"
date: "1946-03-05"
type: "Historical Evidence"
---

## Core Argument

From Stettin in the Baltic to Trieste in the Adriatic, an iron curtain has descended.

## Political Significance

Marked the beginning of the Cold War and defined Churchill's anti-communist stance.

## Related Issues

- East-West relations
- Military alliance policy
- Ideological confrontation
📖 Full customization guide: docs/CUSTOMIZE.md

📝 Student Deliverables
Deliverable	Format	Description
Agent Config	config.json	Modified persona
Knowledge Cards	*.md	New or updated knowledge entries
Observation Report	Markdown/PDF	Agent behavior analysis
Debate Record	Screenshots/Logs	Complete debate transcripts
📚 Documentation
Document	Description
INSTALL.md	Step-by-step installation (with disk space solutions)
CUSTOMIZE.md	How to edit persona and knowledge
OBSERVATION.md	Observation guide with templates
SUBMISSION.md	Student submission guide
🤝 Contributing
We welcome Issues and Pull Requests!

How to submit your Agent:

Fork this repository

Create your agent folder under agents/

Submit config.json and knowledge/*.md

Open a Pull Request

📄 License
MIT License. Free to use, modify, and distribute for educational purposes.

Built on a16z-infra/ai-town — also MIT licensed.

🙏 Acknowledgments
Stanford University Generative Agents research team

a16z-infra AI Town project

Yonsei University IHPI (Institute for Historical Political Intelligence) collaboration

🏛️ PolisAI — Where history echoes in the digital polis.

🌏 한국어 / 中文
한국어 (Korean)
PolisAI는 연세대학교 역사정치지능연구소(IHPI)와 협력하여 개발된 AI 정치인물 시뮬레이션 교육 플랫폼입니다.

학생들은 이 플랫폼을 통해:

역사적 정치인물의 AI 에이전트를 직접 구축하고

지식베이스와 성격 설정을 수정하며

가상 의회에서의 토론을 관찰할 수 있습니다.

📖 자세한 내용은 한국어 가이드를 참조하세요.

中文 (Chinese)
PolisAI 是延世大学历史政治智能研究院（IHPI）合作开发的教育用 AI 政治人物模拟平台。

学生可以通过本平台：

自主构建历史政治人物的 AI 智能体

修改知识库和人格设定

观察其在虚拟议会中的辩论行为

📖 详细内容请参阅中文指南

📧 Contact
