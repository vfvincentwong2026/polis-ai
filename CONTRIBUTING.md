# Contributing to PolisAI

**English | [한국어](#폴리스ai에-기여하기) | [中文](#为-polisai-做贡献)**

---

First off, thank you for considering contributing to PolisAI! 🏛️

We welcome contributions from students, educators, researchers, and developers. This is a community-driven educational project, and every contribution matters.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Ways to Contribute](#ways-to-contribute)
- [Submitting a New Agent](#submitting-a-new-agent)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)
- [Getting Help](#getting-help)

---

## Code of Conduct

By participating in this project, you agree to:

- Be **respectful and inclusive** to all contributors
- Focus on **constructive feedback**
- Accept that not all contributions will be merged
- Respect **different skill levels** — everyone is learning

---

## Ways to Contribute

### 1. 🎭 Submit a New Agent

Create a new historical political agent:

1. **Fork** this repository
2. **Create** a new folder under `agents/` with your agent name
3. **Add** `config.json` with the persona configuration
4. **Add** knowledge cards in `knowledge/` as `.md` files
5. **Submit** a Pull Request

> 📖 See [CUSTOMIZE.md](docs/CUSTOMIZE.md) for detailed instructions.

### 2. 📝 Improve Documentation

- Fix typos and grammar
- Add clearer explanations
- Translate to other languages
- Add more examples
- Write tutorials

### 3. 🐛 Report Issues

- **Bugs**: Describe what happened vs. what should have happened
- **Feature Requests**: Describe what you'd like to see
- **Questions**: Ask anything — we're here to help

### 4. 💻 Code Contributions

- Optimization
- Feature additions
- Bug fixes
- UI improvements

---

## Submitting a New Agent

### Checklist

Before submitting your agent, ensure:

- [ ] `config.json` is valid JSON
- [ ] All required fields are filled
- [ ] Knowledge cards have proper frontmatter (`id`, `source`, `date`, `type`)
- [ ] The agent behaves consistently when tested
- [ ] You have included at least 2 knowledge cards
- [ ] The agent name is unique

### How to Test Your Agent

```bash
# Clone your fork
git clone https://github.com/your-username/polis-ai.git
cd polis-ai

# Run the project
npm install
npx convex dev
npm run dev

# Observe your agent in action
Pull Request Process
Fork the repository

Create a feature branch:

bash
git checkout -b feature/your-feature-name
Commit your changes:

bash
git commit -m "description of your changes"
Push to your fork:

bash
git push origin feature/your-feature-name
Open a Pull Request against the main branch

PR Title Guidelines
Type	Format	Example
New Agent	feat: add [agent name] agent	feat: add Gandhi agent
Documentation	docs: [description]	docs: update installation guide
Bug Fix	fix: [description]	fix: resolve port conflict on Windows
Enhancement	enhance: [description]	enhance: add Korean translation
Reporting Issues
Bug Report Template
markdown
**Describe the bug**
[A clear and concise description of what the bug is]

**To Reproduce**
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
[A clear and concise description of what you expected to happen]

**Screenshots**
[If applicable, add screenshots]

**Environment**
- OS: [e.g., Windows 11, macOS 14]
- Node.js version: [e.g., v18.17.0]
- Browser: [e.g., Chrome 120]

**Additional context**
[Add any other context about the problem here]
Feature Request Template
markdown
**Is your feature request related to a problem? Please describe.**
[A clear and concise description of what the problem is]

**Describe the solution you'd like**
[A clear and concise description of what you want to happen]

**Describe alternatives you've considered**
[A clear and concise description of any alternative solutions or features]

**Additional context**
[Add any other context or screenshots about the feature request here]
Getting Help
Open an Issue: GitHub Issues

Contact Maintainer: Vincent Wong (vfvincentwong@gmail.com)

Course Instructor: Prof. Jenny Zhan (jennyzhan20@naver.com)

Recognition
All contributors will be recognized in our CONTRIBUTORS.md file. Your contributions will also be credited in the project's release notes.

Thank you for helping build PolisAI! 🏛️✨

한국어: 폴리스AI에 기여하기
기여 방법
새 에이전트 제출: agents/ 폴더에 새 에이전트 추가

문서 개선: 오타 수정, 번역 추가, 예제 보완

이슈 보고: 버그, 기능 요청, 질문

코드 기여: 최적화, 버그 수정, 새 기능

Pull Request 절차
저장소를 Fork 합니다

기능 브랜치를 생성합니다: git checkout -b feature/your-feature-name

변경사항을 커밋합니다: git commit -m "description"

Fork에 푸시합니다: git push origin feature/your-feature-name

main 브랜치로 Pull Request를 엽니다

도움 받기
이슈 등록: GitHub Issues

문의: Vincent Wong (vfvincentwong@gmail.com)

中文: 为 PolisAI 做贡献
贡献方式
提交新 Agent：在 agents/ 文件夹下添加新 Agent

改进文档：修正错字、添加翻译、补充示例

报告问题：Bug、功能请求、提问

代码贡献：优化、修复、新功能

Pull Request 流程
Fork 本仓库

创建功能分支：git checkout -b feature/your-feature-name

提交变更：git commit -m "description"

推送到你的 Fork：git push origin feature/your-feature-name

向 main 分支提交 Pull Request

获取帮助
提交 Issue: GitHub Issues

联系: Vincent Wong (vfvincentwong@gmail.com)
