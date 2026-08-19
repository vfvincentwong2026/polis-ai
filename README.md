# 🏛️ PolisAI

**AI Political Agent Lab — From AI Town to Political Intelligence**

---

> ⚠️ **IMPORTANT**: Code is on `master` branch → [View full code here](https://github.com/vfvincentwong2026/polis-ai/tree/master)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-v0.1.0-blue.svg)](CHANGELOG.md)
[![Status](https://img.shields.io/badge/status-Founding%20Beta-green.svg)](CHANGELOG.md)
[![Node.js 18+](https://img.shields.io/badge/node.js-18+-green.svg)](https://nodejs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

<div align="center">
  <img src="assets/YonseiLogo.png" alt="Yonsei University Logo" width="180" style="margin-right: 40px;"/>
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

## 🎮 Live Demo

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=master&repo=vfvincentwong2026/polis-ai&machine=basicLinux32gb&devcontainer_path=.devcontainer%2Fdevcontainer.json)

> No installation needed — click the badge to launch a cloud sandbox. The devcontainer automatically installs Ollama, downloads the local LLM, seeds the 10 political figures, and starts the app (first boot takes ~10 minutes; watch "Creation Log" if curious). When the port-5173 notification appears, open it and visit `/ai-town`.

> 无需安装，点击上方徽章即可在云端运行。环境会自动安装 Ollama、下载本地模型、播种 10 位政治人物并启动应用（首次约 10 分钟）。出现 5173 端口提示后打开，访问 `/ai-town` 即可。

---

## ⚡ 30 秒上手（学生 & 老师）

**直接打开演示链接（无需注册、无需登录）：**

> 🔗 **https://deployment-ins-toolbar-chronicle.trycloudflare.com/ai-town**

> ⚠️ 隧道链接是临时的，如失效请联系维护者重建（见下方"维护者"一节），最新链接也会更新在这里。

### 你会看到什么

- 一幅 2D 地图，**10 位历史政治人物**（邓小平、周恩来、吉田茂、中曾根康弘、朴正熙、金大中、基辛格、凯南、戈尔巴乔夫、李光耀）在地图上自由走动、相遇、对话
- 点击任意人物可查看其身份设定与正在进行的思想活动

### 基本操作

| 操作 | 说明 |
|------|------|
| 🖱️ 点击地图 | 移动你的视角 / 观察位置 |
| 👤 点击人物 | 查看该人物的设定与对话 |
| 💬 对话气泡 | 人物相遇时会自动展开政策辩论（如出口导向 vs 吉田路线） |
| ⏳ 耐心等待 | 云端用 2 核 CPU 跑本地大模型，**每句对话约需 2–3 分钟生成**，先逛逛地图再回来看 |

### 课堂建议

- 给学生布置观察任务：记录两位人物的对话，分析其政策立场是否符合史实
- 对比实验：观察"现实主义"（基辛格、凯南）与"发展主义"（朴正熙、李光耀）人物的互动差异

### 维护者：链接失效时重建

```bash
# 进入 codespace 终端，一条命令重建全部服务和新链接
bash scripts/codespaces-start.sh
# 结尾会打印新的分享链接，替换上文 🔗 链接即可
```

---

## 📖 From AI Town to PolisAI

### What is AI Town?

**AI Town** is an open-source virtual town project by a16z, based on Stanford's *Generative Agents* research paper. AI characters live, chat, and socialize freely — like a living digital community.

### Why PolisAI?

AI Town is a **general social simulation**, but political education and research require:

| AI Town (General Social) | PolisAI (Political) |
|--------------------------|---------------------|
| AI characters are "residents" | AI characters are **political figures** (Churchill, Mandela, etc.) |
| Casual chat | **Parliamentary debate** + policy proposals + voting |
| Random social interaction | Ideology-driven, evidence-based interaction |
| No historical constraints | Constrained by historical persona + knowledge cards |
| Entertainment/tech exploration | **Education + academic research** |

> **Core Mission**: Not to make AI *imitate* historical figures, but to make AI *reason* like them — with evidence, logical consistency, and historical integrity.

---

## 🔑 Key Features

| Feature | Description |
|---------|-------------|
| 🏛️ **Parliamentary Debate** | One-click multi-agent debate, observe position shifts |
| 📝 **Editable Knowledge** | Update knowledge via Markdown files |
| 🎭 **Customizable Persona** | Adjust ideology, personality, decision rules via JSON |
| 🖥️ **Run Locally** | No registration required |
| 👁️ **Visual Observation** | 2D map with real-time agent movement and dialogue |
| 🔌 **Free to Use** | Supports local Ollama models — completely free |

### 🎯 Course Applications

- History & Political Intelligence
- AI & Social Sciences
- Digital Humanities
- Political Simulation & Forecasting

---

## 👨‍🏫 For Teachers

| Task | Action |
|------|--------|
| **Classroom demo** | Click the live demo link above |
| **Run locally** | See [Quick Start](#quick-start) below |
| **See student modifications** | Open the `agents/` folder |
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

**How to Submit**: See [Student Submission Guide](docs/SUBMISSION.md)

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

📁 Project Structure (Students: Focus on agents/)
text
polis-ai/
├── README.md                 # This file
├── agents/                   # 👈 STUDENT'S MAIN WORKSPACE
│   ├── churchill/            # Sample: Churchill
│   │   ├── config.json
│   │   └── knowledge/
│   └── mandela/              # Sample: Mandela
│       ├── config.json
│       └── knowledge/
├── docs/
│   ├── INSTALL.md
│   ├── CUSTOMIZE.md
│   ├── OBSERVATION.md
│   └── SUBMISSION.md
├── convex/                   # Backend logic (generally don't modify)
├── src/                      # Frontend code (generally don't modify)
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

Yonsei University IHPI (Institute for Historical Political Intelligence)

🏛️ PolisAI — Where history echoes in the digital polis.

🌏 한국어 / 中文
한국어 (Korean)
PolisAI는 연세대학교 역사정치지능연구소(IHPI)와 협력하여 개발된 AI 정치인물 시뮬레이션 교육 플랫폼입니다.

AI Town에서 PolisAI로
AI Town (일반 소셜)	PolisAI (정치 시뮬레이션)
AI 캐릭터는 "주민"	AI 캐릭터는 정치인물 (처칠, 만델라 등)
일상적인 대화	의회 토론 + 정책 제안 + 투표
무작위적 상호작용	이데올로기 기반, 증거 기반 상호작용
역사적 제약 없음	역사적 인격 + 지식 카드로 제약
엔터테인먼트/기술 탐구	교육 + 학술 연구
핵심 사명: AI가 역사적 인물을 모방하는 것이 아니라, 역사적 인물처럼 추론하게 하는 것 — 증거에 기반하고, 논리적으로 일관되며, 역사적 인격에 부합하게.

주요 기능
기능	설명
🏛️ 의회 토론	원클릭 다중 에이전트 토론, 입장 변화 관찰
📝 지식 편집 가능	Markdown 파일로 지식 업데이트
🎭 성격 설정 수정	JSON으로 이념, 성격, 의사결정 규칙 조정
🖥️ 로컬 실행	회원가입 불필요
👁️ 시각적 관찰	2D 맵, 실시간 에이전트 이동 및 대화
🔌 무료 사용	로컬 Ollama 모델 지원 — 완전 무료
👨‍🏫 교사용
작업	방법
수업 데모	위의 라이브 데모 링크 클릭
로컬 실행	아래 빠른 시작 참조
학생 수정 사항 확인	agents/ 폴더 열기
더 알아보기	문서 읽기
👨‍🎓 학생용
수정할 파일
text
agents/
└── your_name/              ← 본인 이름으로 폴더 생성
    ├── config.json        ← 성격 설정 (이념, 성격, 의사결정 규칙)
    └── knowledge/         ← 지식 카드 추가 (Markdown 파일)
        └── kc_001.md
제출 방법: 학생 제출 가이드 참조

🚀 빠른 시작
bash
git clone https://github.com/vfvincentwong2026/polis-ai.git
cd polis-ai
npm install
npx convex dev
npm run dev
브라우저에서 http://localhost:5173/ai-town 열기

📁 프로젝트 구조 (학생: agents/ 폴더에 집중)
text
polis-ai/
├── agents/                   # 👈 학생 작업 공간
│   ├── churchill/            # 예시: 처칠
│   └── mandela/              # 예시: 만델라
├── docs/
│   ├── INSTALL.md
│   ├── CUSTOMIZE.md
│   ├── OBSERVATION.md
│   └── SUBMISSION.md
├── convex/                   # 백엔드 (일반적으로 수정하지 않음)
└── src/                      # 프론트엔드 (일반적으로 수정하지 않음)
📚 문서
문서	설명
INSTALL.md	설치 가이드
CUSTOMIZE.md	성격 및 지식 수정 방법
OBSERVATION.md	관찰 가이드
SUBMISSION.md	학생 제출 가이드
🙏 감사의 말
스탠포드 대학교 Generative Agents 연구팀

a16z-infra AI Town 프로젝트

연세대학교 IHPI (역사정치지능연구소)

🏛️ PolisAI — 디지털 폴리스에서 역사가 울려 퍼집니다.

中文 (Chinese)
PolisAI 是延世大学历史政治智能研究院（IHPI）合作开发的教育用 AI 政治人物模拟平台。

从 AI Town 到 PolisAI
AI Town（通用社交小镇）	PolisAI（政治学院）
AI 角色是"居民"	AI 角色是政治人物（丘吉尔、曼德拉等）
日常闲聊	议会辩论 + 政策提案 + 投票
随机社交	基于意识形态和证据的有序互动
无历史约束	受历史人格和知识卡片约束
娱乐/技术探索	教育 + 学术研究
核心理念：不是让 AI 模仿历史人物，而是让 AI 以历史人物的思维方式理解世界——基于证据、逻辑一致、符合历史人格。

主要功能
功能	说明
🏛️ 议会辩论	一键触发多 AI 人物议会辩论，观察立场变化
📝 可编辑知识库	通过 Markdown 文件更新 AI 人物的史料和观点
🎭 可修改人设	通过 JSON 调整意识形态、人格特质、决策规则
🖥️ 本地运行	无需注册
👁️ 可视化观察	2D 场景地图，实时查看 AI 人物移动和对话
🔌 完全免费	支持本地 Ollama 开源模型，零成本运行
👨‍🏫 教师入口
任务	操作
课堂演示	点击上方在线演示链接
本地运行	参考下方 快速开始
查看学生修改	打开 agents/ 文件夹
了解更多	阅读 完整文档
👨‍🎓 学生入口
你需要修改的文件
text
agents/
└── your_name/              ← 创建以你名字命名的文件夹
    ├── config.json        ← 人设（意识形态、人格、决策规则）
    └── knowledge/         ← 知识库（史料、观点、证据）
        └── kc_001.md
提交方式：查看 学生提交指引

🚀 快速开始
bash
git clone https://github.com/vfvincentwong2026/polis-ai.git
cd polis-ai
npm install
npx convex dev
npm run dev
浏览器打开 http://localhost:5173/ai-town

📁 项目结构（学生请看 agents/）
text
polis-ai/
├── agents/                   # 👈 学生修改这个文件夹
│   ├── churchill/            # 示例：丘吉尔
│   └── mandela/              # 示例：曼德拉
├── docs/
│   ├── INSTALL.md
│   ├── CUSTOMIZE.md
│   ├── OBSERVATION.md
│   └── SUBMISSION.md
├── convex/                   # 后端（一般不改）
└── src/                      # 前端（一般不改）
📚 文档
文档	说明
INSTALL.md	安装指南
CUSTOMIZE.md	如何修改人设和知识库
OBSERVATION.md	观察与记录指南
SUBMISSION.md	学生提交指引
🙏 致谢
斯坦福大学 Generative Agents 研究团队

a16z-infra AI Town 项目

延世大学 IHPI（历史政治智能研究院）

🏛️ PolisAI — 在数字城邦中，见证历史的回响。

📧 Contact / 문의 / 联系方式
Project Maintainer: Vincent Wong (vfvincentwong@gmail.com)

Course Instructor: Prof. Jenny Zhan (jennyzhan20@naver.com), Yonsei University

Yonsei IHPI: Institute for Historical Political Intelligence
