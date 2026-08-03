# 🏛️ PolisAI

**历史政治智能体实验室 · AI Political Agent Lab**

> ⚠️ **重要提示**：本仓库代码在 `master` 分支，[点击这里查看完整代码](https://github.com/vfvincentwong2026/polis-ai/tree/master)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-v0.1.0-blue.svg)](CHANGELOG.md)
[![Status](https://img.shields.io/badge/status-Founding%20Beta-green.svg)](CHANGELOG.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

---

## 🎮 30秒在线体验

👉 **[点击这里体验 PolisAI 在线演示](https://sturdy-fishstick-jr5vjqrp54j9h5rx-5173.app.github.dev/ai-town)**

> 无需安装，打开即看。AI 角色在虚拟小镇中自由行走、交谈、辩论。

---

## 👨‍🏫 教师入口

| 任务 | 操作 |
|------|------|
| **演示给学生看** | 点击上面的在线演示链接 |
| **本地运行** | 参考下方 [快速开始](#快速开始) |
| **查看学生修改位置** | 打开 `agents/` 文件夹 |
| **了解更多** | 查看 [完整文档](docs/) |

---

## 👨‍🎓 学生入口

### 📁 你要改什么？
agents/
└── 你的名字/ ← 创建以你名字命名的文件夹
├── config.json ← 修改人设（意识形态、人格、决策规则）
└── knowledge/ ← 添加知识卡片（Markdown 文件）
└── kc_001.md

text

### 📝 修改示例

**修改人设 (`config.json`)**：

```json
{
  "name": "你的政治人物名字",
  "era": "20世纪",
  "country": "国家",
  "ideology": "意识形态",
  "core_principles": ["原则1", "原则2", "原则3"],
  "personality_traits": ["特质1", "特质2", "特质3"],
  "decision_rules": ["决策规则1", "决策规则2"],
  "speech_style": "演讲风格描述"
}
添加知识卡片 (knowledge/kc_001.md)：

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
📤 如何提交你的作业？
→ 完整步骤请查看 学生提交指引

🚀 快速开始
前置要求
软件	版本
Node.js	18.x 或更高
Git	最新版
安装步骤
bash
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
├── agents/              ← 👈 学生修改这个文件夹
│   ├── churchill/       ← 示例：丘吉尔
│   │   ├── config.json
│   │   └── knowledge/
│   └── mandela/         ← 示例：曼德拉
├── convex/              ← 后端逻辑（一般不改）
├── src/                 ← 前端界面（一般不改）
├── public/              ← 静态资源（一般不改）
├── docs/                ← 文档
│   ├── INSTALL.md
│   ├── CUSTOMIZE.md
│   ├── OBSERVATION.md
│   └── SUBMISSION.md
└── README.md
📚 完整文档
文档	说明
INSTALL.md	详细安装步骤
CUSTOMIZE.md	如何修改人设和知识库
OBSERVATION.md	观察与记录指南
SUBMISSION.md	学生作业提交指引
🤝 合作高校
延世大学 — Institute for Historical Political Intelligence (IHPI)

📄 许可证
MIT License · 免费用于教育和研究

🏛️ 在数字城邦中，见证历史的回响。

🌏 한국어 / 中文 简要说明
한국어
PolisAI는 연세대학교 IHPI와 협력하여 개발된 AI 정치인물 시뮬레이션 교육 플랫폼입니다.
학생들은 AI 에이전트의 성격과 지식을 직접 수정하며 가상 의회에서의 토론을 관찰할 수 있습니다.

中文
PolisAI 是延世大学 IHPI 合作开发的 AI 政治人物模拟教育平台。
学生可以修改 AI 智能体的人设和知识库，观察其在虚拟议会中的辩论行为。

📧 联系方式
项目维护者：Vincent Wong (vfvincentwong@gmail.com)

课程教授：Prof. Jenny Zhan (jennyzhan20@naver.com)
