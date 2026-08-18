#!/usr/bin/env node
// Generates data/agents.generated.ts from agents/<figure>/{config.json,knowledge/*.md}.
// Plain Node ESM, no external dependencies. Run: npm run gen:agents

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const agentsDir = path.join(repoRoot, 'agents');
const outFile = path.join(repoRoot, 'data', 'agents.generated.ts');

const SPRITES = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8'];
// Soft cap for the knowledge block embedded in each agent's identity string,
// so LLM prompts stay small.
const KNOWLEDGE_BUDGET = 1500;
const SUMMARY_CAP = 400;

// --- Minimal flat frontmatter parser (key: value, quoted strings, ["a","b"] arrays) ---
function parseFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { meta: {}, body: text };
  const meta = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!kv) continue;
    const [, key, rawValue] = kv;
    let value = rawValue.trim();
    if (value.startsWith('[') && value.endsWith(']')) {
      const inner = value.slice(1, -1).trim();
      meta[key] = inner
        ? inner.split(',').map((s) => s.trim().replace(/^["']|["']$/g, ''))
        : [];
    } else {
      meta[key] = value.replace(/^["']|["']$/g, '');
    }
  }
  return { meta, body: text.slice(m[0].length) };
}

// Extract a `## Section` body from markdown.
function section(body, name) {
  const re = new RegExp(`^## ${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*$`, 'm');
  const m = body.match(re);
  if (!m) return '';
  const rest = body.slice(m.index + m[0].length);
  const next = rest.match(/^## /m);
  return (next ? rest.slice(0, next.index) : rest).trim();
}

// Bullet list items ("- ...") from a markdown section.
function bullets(md) {
  return md
    .split(/\r?\n/)
    .map((l) => l.match(/^\s*-\s+(.*)$/))
    .filter(Boolean)
    .map((m) => m[1].trim());
}

function readKnowledgeCards(figureDir) {
  const kdir = path.join(figureDir, 'knowledge');
  if (!fs.existsSync(kdir)) return [];
  const cards = [];
  for (const file of fs.readdirSync(kdir).filter((f) => f.endsWith('.md')).sort()) {
    const { meta, body } = parseFrontmatter(fs.readFileSync(path.join(kdir, file), 'utf8'));
    let summary = section(body, 'Summary').replace(/\s+/g, ' ').trim();
    if (summary.length > SUMMARY_CAP) {
      summary = summary.slice(0, SUMMARY_CAP).replace(/\s+\S*$/, '') + '…';
    }
    cards.push({
      id: meta.id ?? path.basename(file, '.md'),
      title: meta.title ?? '',
      source: meta.source ?? '',
      date: meta.date ?? '',
      type: meta.type ?? '',
      summary,
      keyQuotes: bullets(section(body, 'Key Quotes for Agent Reasoning')),
    });
  }
  return cards;
}

function buildIdentity(cfg, knowledge) {
  const parts = [];
  parts.push(
    `You are ${cfg.name}, ${cfg.role}, of ${cfg.country} (${cfg.era}).`,
  );
  parts.push(`Your ideology: ${cfg.ideology}.`);
  if (cfg.core_principles?.length) {
    parts.push('Your core principles:');
    for (const p of cfg.core_principles) parts.push(`- ${p}`);
  }
  if (cfg.personality_traits?.length) {
    parts.push(`Your personality: ${cfg.personality_traits.join(', ')}.`);
  }
  if (cfg.decision_rules?.length) {
    parts.push('Your decision rules:');
    for (const r of cfg.decision_rules) parts.push(`- ${r}`);
  }
  if (cfg.speech_style) {
    parts.push(`Your speech style: ${cfg.speech_style}.`);
  }
  if (knowledge.length) {
    const lines = [
      'Your knowledge base (historical record you ground yourself in):',
    ];
    for (const k of knowledge) {
      lines.push(`- ${k.title} — ${k.source}${k.summary ? ` — ${k.summary}` : ''}`);
    }
    let block = lines.join('\n');
    if (block.length > KNOWLEDGE_BUDGET) {
      block = block.slice(0, KNOWLEDGE_BUDGET).replace(/\s+\S*$/, '') + '…';
    }
    parts.push(block);
  }
  parts.push(
    'When making claims about your views, ground them in your documented historical record and knowledge cards; if you lack evidence on a topic, say so plainly.',
  );
  return parts.join('\n');
}

function buildPlan(cfg) {
  const kws = (cfg.keywords ?? []).slice(0, 3).join(', ');
  return (
    `You want to discuss the concrete policy lessons of your era${kws ? ` (especially ${kws})` : ''}, ` +
    `defend and explain your doctrine (${cfg.ideology}), ` +
    `and test whether other leaders' ideas and policies meet your standards, citing your historical record when you argue.`
  );
}

function main() {
  const figureDirs = fs
    .readdirSync(agentsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  const agents = [];
  for (const dir of figureDirs) {
    const figureDir = path.join(agentsDir, dir);
    const cfgPath = path.join(figureDir, 'config.json');
    if (!fs.existsSync(cfgPath)) {
      console.warn(`Skipping ${dir}: no config.json`);
      continue;
    }
    const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
    const knowledge = readKnowledgeCards(figureDir);
    agents.push({
      name: cfg.name,
      identity: buildIdentity(cfg, knowledge),
      plan: buildPlan(cfg),
      knowledge,
      sprite: SPRITES[agents.length % SPRITES.length],
    });
  }

  const ts = `// GENERATED by scripts/generate-agents.mjs — do not edit by hand. Run: npm run gen:agents

export interface KnowledgeCard {
  id: string;
  title: string;
  source: string;
  date: string;
  type: string;
  summary: string;
  keyQuotes: string[];
}

export interface PoliticalAgent {
  name: string;
  identity: string;
  plan: string;
  knowledge: KnowledgeCard[];
  sprite: string;
}

export const PoliticalAgents: PoliticalAgent[] = ${JSON.stringify(agents, null, 2)};
`;
  fs.writeFileSync(outFile, ts);
  console.log(`Wrote ${path.relative(repoRoot, outFile)} with ${agents.length} agents:`);
  for (const a of agents) {
    console.log(
      `  - ${a.name} (sprite ${a.sprite}, ${a.knowledge.length} knowledge card(s), identity ${a.identity.length} chars)`,
    );
  }
}

main();
