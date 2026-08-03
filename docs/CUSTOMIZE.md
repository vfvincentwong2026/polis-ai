# Customization Guide — PolisAI

**English | [한국어](#사용자-지정-가이드) | [中文](#自定义指南-中文版)**

---

## Overview

This guide teaches you how to **create your own AI political agent** from scratch or **modify an existing one**.

---

## 1. Creating a New Agent

### Step 1: Create Your Agent Folder

```bash
mkdir -p agents/your_agent_name
mkdir -p agents/your_agent_name/knowledge

Step 2: Create config.json
Copy the template below and customize it:

json
{
  "name": "Full Name",
  "display_name": "Display Name",
  "era": "20th Century",
  "country": "Country",
  "role": "Political Role",
  "ideology": "Ideological Label",
  "image": "filename.jpg",
  "core_principles": [
    "Principle 1",
    "Principle 2",
    "Principle 3"
  ],
  "personality_traits": [
    "Trait 1",
    "Trait 2",
    "Trait 3"
  ],
  "decision_rules": [
    "Rule 1: In situation X, do Y",
    "Rule 2: Prioritize Z over W"
  ],
  "speech_style": "Describe how this person speaks",
  "keywords": ["keyword1", "keyword2"],
  "knowledge_sources": [
    "Source 1",
    "Source 2"
  ]
}
Step 3: Add Knowledge Cards
Create Markdown files in the knowledge/ folder. Each card should follow this format:

markdown
---
id: kc_001
title: "Title of Knowledge Card"
source: "Original source citation"
date: "YYYY-MM-DD"
type: "Historical Evidence | Scholarly Interpretation | Simulated Contemporary Inference"
language: "English"
tags: ["tag1", "tag2"]
---

## Core Argument

[What is the main point?]

## Summary

[Brief summary]

## Political Significance

[Why does this matter for the agent's political identity?]

## Key Quotes (if applicable)

- "Quote 1"
- "Quote 2"

## Related Issues

- Issue 1
- Issue 2

## Decision Rules Derived from This Source

- Rule 1
- Rule 2
2. Modifying an Existing Agent
Edit Persona
Open agents/agent_name/config.json and modify any field.

Edit Knowledge
Add: Create a new .md file in knowledge/

Edit: Modify an existing .md file

Delete: Remove the file

3. Best Practices
What Makes a Good Knowledge Card?
Criterion	Good	Needs Improvement
Source	Specific date, location, author	"I read somewhere..."
Type	Clearly labeled as Evidence/Interpretation/Inference	Mixed without distinction
Link to Agent	Explicit connection to ideology or decision rule	Isolated fact with no connection
Concreteness	Specific quote or event	Vague generalization
Example: Good vs. Needs Improvement
✅ Good Knowledge Card:

markdown
---
id: kc_003
source: "Churchill, House of Commons, June 4, 1940"
date: "1940-06-04"
type: "Historical Evidence"
---

## Core Argument

"We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets..."

## Political Significance

Establishes Churchill's commitment to total resistance against Nazi Germany. Informs his decision rule: "Never surrender to tyranny."
❌ Needs Improvement:

markdown
---
source: "Some article about Churchill"
---

Churchill was a good leader.
4. Testing Your Customizations
Save your changes

Restart the application: npm run dev

Observe the agent's behavior in the town

Check if the agent references the new knowledge

Refine based on what you observe

5. Submitting Your Agent (Optional)
Once you're happy with your agent:

Fork this repository

Copy your entire agent folder to the fork

Submit a Pull Request

Your agent could become a sample for future students!

한국어: 사용자 지정 가이드
새 에이전트 생성하기
agents/ 폴더에 새 폴더 생성

config.json 파일 작성

knowledge/ 폴더에 지식 카드 추가

config.json 템플릿
json
{
  "name": "이름",
  "era": "시대",
  "country": "국가",
  "ideology": "이데올로기",
  "core_principles": ["원칙 1", "원칙 2"],
  "personality_traits": ["특성 1", "특성 2"],
  "decision_rules": ["규칙 1", "규칙 2"],
  "speech_style": "언변 스타일"
}
中文: 自定义指南
创建新 Agent
在 agents/ 下创建新文件夹

编写 config.json 文件

在 knowledge/ 文件夹中添加知识卡片

config.json 模板
json
{
  "name": "姓名",
  "era": "时代",
  "country": "国家",
  "ideology": "意识形态",
  "core_principles": ["原则 1", "原则 2"],
  "personality_traits": ["特质 1", "特质 2"],
  "decision_rules": ["规则 1", "规则 2"],
  "speech_style": "演讲风格"
}
Need Help?
Open an Issue: GitHub Issues

Contact: Vincent Wong (vfvincentwong@gmail.com)
