# Observation Guide — PolisAI

**English | [한국어](#관찰-가이드) | [中文](#观察指南-中文版)**

---

## Why Observe?

Observation is the core research activity in PolisAI. You are not just "playing" — you are collecting data on how political agents evolve, reason, and make decisions.

---

## What to Observe

### 1. Agent Behavior Over Time

| Dimension | What to Look For |
|-----------|------------------|
| **Consistency** | Does the agent maintain core principles across different contexts? |
| **Evidence Use** | Does the agent reference knowledge cards? Are sources used properly? |
| **Uncertainty** | Does the agent acknowledge knowledge gaps? |
| **Adaptation** | Does the agent update positions when new evidence is added? |
| **Persona Integrity** | Does the agent stay "in character"? |

### 2. Debate Performance

| Aspect | Observation Questions |
|--------|----------------------|
| Position | What is the agent's stance on the issue? |
| Reasoning | How does the agent justify its position? |
| Evidence | Which knowledge cards are cited? |
| Interaction | How does the agent respond to other agents? |
| Change | Does the agent's position shift during debate? |

### 3. Knowledge Base Evolution

- What new knowledge cards were added?
- What existing cards were updated?
- How did changes affect the agent's behavior?

---

## Observation Template

### Weekly Observation Report

```markdown
# Week [X] Observation Report

## Agent: [Agent Name]

### Knowledge Base Changes
- **New Cards Added**: [List]
- **Cards Updated**: [List]

### Observed Behavior
- **Key Actions**: [Describe]
- **Notable Quotes**: ["Quote 1", "Quote 2"]

### Consistency Check
- **Core Principles**: [Still consistent? Yes/No — explain]
- **Evidence Use**: [Did the agent properly cite sources?]

### Debate Participation (if applicable)
- **Issue**: [Topic]
- **Position**: [For/Against/Abstain]
- **Reasoning**: [Key arguments]
- **Evidence Cited**: [Card IDs]

### Reflection
- **Surprising Observations**: [...]
- **Questions Raised**: [...]
- **Next Steps**: [...]
Recording Methods
Option 1: Screenshots
When to use: Capturing specific moments, debate positions, dialogue

How: Use your OS screenshot tool (Cmd+Shift+4 on Mac, Snipping Tool on Windows)

Organize: Create a folder observations/weekX/screenshots/

Option 2: Manual Notes
When to use: Recording behaviors, patterns, reflections

Format: Markdown or plain text

Organize: observations/weekX/notes.md

Option 3: System Logs
When to use: Technical analysis, exact transcripts

Location: Logs are saved automatically in logs/

Format: JSON or text files

Observation Schedule
Week	Focus	Deliverable
1	Baseline observation	Initial notes
2-3	Knowledge building	Knowledge cards + observations
4	First debate	Debate record
5-6	Iteration	Updated config + observations
7	Second debate	Comparative analysis
8	Final reflection	Full report
Sample Observation Entry
markdown
# Week 4 Observation: Churchill Debate on Military Spending

## Context
Debate topic: "Should the UK increase military spending by 20%?"
Date: 2026-10-05
Participants: Churchill, Mandela

## Churchill's Position
**Stance**: Strongly in favor
**Key Argument**: "We must never be caught unprepared. History shows that weakness invites aggression."
**Evidence Cited**: "Iron Curtain Speech" (kc_001)

## Behavior Notes
- Spoke first, set the tone
- Used historical references extensively
- Became defensive when challenged by Mandela
- Did not adjust position after hearing counter-arguments

## Reflection
Churchill's "never surrender" principle seems to manifest as "never compromise" on defense issues. This is consistent with the historical Churchill but may be overly rigid in the simulation.

## Questions
- Would adding knowledge cards about peacetime defense budgets change his position?
- How would he react to a budget constraint crisis?

## Next Steps
- Add knowledge cards about UK defense policy in the 1950s
- Test with a budget crisis scenario
한국어: 관찰 가이드
관찰 템플릿
markdown
# [X]주차 관찰 보고서

## 에이전트: [이름]

### 지식베이스 변경사항
- **추가된 카드**: [목록]
- **수정된 카드**: [목록]

### 관찰된 행동
- **주요 행동**: [기술]
- **주요 인용문**: ["인용문 1", "인용문 2"]

### 일관성 확인
- **핵심 원칙**: [일관됨? 예/아니오 — 설명]
- **증거 활용**: [에이전트가 출처를 적절히 인용했는가?]

### 토론 참여 (해당 시)
- **주제**: [토픽]
- **입장**: [찬성/반대/기권]
- **근거**: [주요 논거]
- **인용된 증거**: [카드 ID]

### 반성
- **놀라운 관찰**: [...]
- **제기된 질문**: [...]
- **다음 단계**: [...]
中文: 观察指南
观察模板
markdown
# 第[X]周观察报告

## Agent：[姓名]

### 知识库变更
- **新增卡片**：[列表]
- **更新卡片**：[列表]

### 观察到的行为
- **关键行动**：[描述]
- **重要引述**：["引述 1", "引述 2"]

### 一致性检查
- **核心原则**：[是否一致？是/否 — 说明]
- **证据使用**：[Agent 是否恰当引用来源？]

### 辩论参与（如适用）
- **议题**：[主题]
- **立场**：[支持/反对/弃权]
- **推理**：[主要论点]
- **引用证据**：[卡片 ID]

### 反思
- **意外观察**：[...]
- **提出的问题**：[...]
- **下一步**：[...]
Need Help?
Open an Issue: GitHub Issues

Contact: Vincent Wong (vfvincentwong@gmail.com)
