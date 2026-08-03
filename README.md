# 🏛️ PolisAI

**AI Political Agent Lab — 从 AI Town 到 AI 政治学院**

> ⚠️ **重要提示**：本仓库代码在 `master` 分支，[点击这里查看完整代码](https://github.com/vfvincentwong2026/polis-ai/tree/master)

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

> 无需安装，打开即看。AI 角色在虚拟议会中辩论、结盟、决策。

---

## 📖 从 AI Town 到 PolisAI

### AI Town 是什么？

**AI Town** 是由 a16z 开源的虚拟小镇项目，基于斯坦福大学《生成式智能体》研究论文。在 AI Town 中，AI 角色自由生活、社交、行走——像一个活的数字社区。

### 为什么需要 PolisAI？

AI Town 是**通用社交模拟**，但政治学教育和研究需要的是：
- 🏛️ **议会辩论** vs 日常闲聊
- 🧠 **意识形态一致性** vs 随意社交
- 📜 **史料证据约束** vs 自由发挥
- 🎯 **政治决策模拟** vs 日常行为模拟

### 我们做了什么转化？

| AI Town（通用社交小镇） | PolisAI（政治学院） |
|------------------------|-------------------|
| AI 角色是“虚拟居民” | AI 角色是“政治人物”（丘吉尔、曼德拉等） |
| 日常闲聊 | 议会辩论 + 政策提案 + 投票 |
| 随机社交 | 基于意识形态和史料的有序互动 |
| 无历史约束 | 受历史人格和知识卡片约束 |
| 娱乐/技术探索 | 教学 + 学术研究 |

> **核心理念**：不是让 AI 模仿历史人物，而是让 AI **以历史人物的思维方式**理解世界——基于证据、逻辑一致、符合历史人格。

---

## 🔑 Key Features

| Feature | Description |
|---------|-------------|
| 🏛️ **议会辩论** | 一键触发多 AI 人物议会辩论，观察立场变化 |
| 📝 **可编辑知识库** | 通过 Markdown 文件为 AI 人物补充史料和观点 |
| 🎭 **可修改人设** | 通过 JSON 调整意识形态、人格特质、决策规则 |
| 🖥️ **本地运行** | 学生下载即用，无需注册 |
| 👁️ **可视化观察** | 2D 场景地图，实时查看 AI 人物移动和对话 |
| 🔌 **完全免费** | 支持本地 Ollama 开源模型，零成本运行 |

### 🎯 适用课程

- 历史政治智能
- 人工智能与社会科学
- 数字人文
- 政治模拟与预测

---

## 👨‍🏫 For Teachers

| Task | Action |
|------|--------|
| **课堂演示** | 点击上方在线演示链接 |
| **本地运行** | 参考下方 [快速开始](#快速开始) |
| **查看学生修改位置** | 打开 `agents/` 文件夹 |
| **了解更多** | 阅读 [完整文档](docs/) |

---

## 👨‍🎓 For Students

### 你的任务

在 `agents/` 文件夹中，以你的名字创建文件夹，构建一个 AI 政治人物：
agents/
└── your_name/ ← 创建以你名字命名的文件夹
├── config.json ← 人设（意识形态、人格、决策规则）
└── knowledge/ ← 知识库（史料、观点、证据）
└── kc_001.md

text

**提交方式**：查看 [学生提交指引](docs/SUBMISSION.md)

---

## 🚀 快速开始

### 前置要求

| 软件 | 版本 |
|------|------|
| Node.js | 18.x 或更高 |
| Git | 最新版 |

### 安装步骤

```bash
# 1. 克隆仓库
git clone https://github.com/vfvincentwong2026/polis-ai.git
cd polis-ai

# 2. 安装依赖
npm install

# 3. 启动后端
npx convex dev

# 4. 启动前端（新开终端）
npm run dev
浏览器打开 http://localhost:5173/ai-town

📖 详细安装指南：docs/INSTALL.md

📁 项目结构（学生必看）
text
polis-ai/
├── README.md                 # 本文件
├── agents/                   # 👈 学生修改这个文件夹
│   ├── churchill/            # 示例：丘吉尔
│   │   ├── config.json       # 人设配置
│   │   └── knowledge/        # 知识库
│   │       ├── kc_001.md    # 铁幕演说
│   │       └── kc_002.md    # 最辉煌的时刻
│   └── mandela/              # 示例：曼德拉
│       ├── config.json
│       └── knowledge/
├── docs/
│   ├── INSTALL.md            # 安装指南
│   ├── CUSTOMIZE.md          # 自定义指南
│   ├── OBSERVATION.md        # 观察指南
│   └── SUBMISSION.md         # 学生提交指引
├── convex/                   # 后端逻辑（一般不改）
├── src/                      # 前端界面（一般不改）
└── LICENSE                   # MIT License
🎯 如何修改 Agent
1️⃣ 编辑人设（config.json）
json
{
  "name": "你的政治人物名字",
  "era": "所属时代",
  "country": "国家",
  "ideology": "意识形态标签",
  "core_principles": ["原则1", "原则2", "原则3"],
  "personality_traits": ["特质1", "特质2", "特质3"],
  "decision_rules": ["决策规则1", "决策规则2"],
  "speech_style": "演讲风格描述"
}
2️⃣ 编辑知识库（Markdown）
创建 agents/your_agent/knowledge/*.md：

markdown
---
id: kc_001
source: "来源名称，如《铁幕演说》"
date: "1946-03-05"
type: "历史证据"
---

## 核心观点

[摘录原文或核心论述]

## 政治含义

[该观点对人物政治立场的影响]

## 关联议题

- 东西方关系
- 军事同盟政策
📖 完整自定义指南：docs/CUSTOMIZE.md

📝 学生提交物
提交物	格式	说明
Agent 配置	config.json	修改后的人设
知识卡片	*.md	新增或修改的知识条目
观察报告	Markdown/PDF	Agent 行为分析
辩论记录	截图/日志	议会辩论完整记录
📚 完整文档
文档	说明
INSTALL.md	详细安装步骤
CUSTOMIZE.md	如何修改人设和知识库
OBSERVATION.md	观察与记录指南
SUBMISSION.md	学生提交指引
🤝 贡献
欢迎提交 Issue 和 Pull Request！

如何提交你的 Agent：

Fork 本仓库

在 agents/ 下创建你的 Agent 文件夹

提交 config.json 和 knowledge/*.md

提交 Pull Request

📄 许可证
MIT License · 免费用于教育和研究

底层框架基于 a16z-infra/ai-town，同样遵循 MIT 许可证。

🙏 致谢
斯坦福大学 Generative Agents 研究团队

a16z-infra AI Town 项目

延世大学 IHPI（历史政治智能研究院）合作

🏛️ PolisAI — 在数字城邦中，见证历史的回响。

🌏 한국어 / 中文
한국어 (Korean)
PolisAI는 연세대학교 역사정치지능연구소(IHPI)와 협력하여 개발된 AI 정치인물 시뮬레이션 교육 플랫폼입니다.

AI Town을 기반으로, 일반적인 AI 캐릭터를 역사적 정치인물로 대체하고, 일상적인 대화를 의회 토론으로 전환하였습니다.

中文 (Chinese)
PolisAI 是延世大学历史政治智能研究院（IHPI）合作开发的教育用 AI 政治人物模拟平台。

基于 AI Town，将通用 AI 角色替换为历史政治人物，将日常对话转化为 议会辩论。

📧 联系方式
项目维护者：Vincent Wong (vfvincentwong@gmail.com)

课程教授：Prof. Jenny Zhan (jennyzhan20@naver.com), 延世大学

延世大学 IHPI：历史政治智能研究院
