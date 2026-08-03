# Installation Guide — PolisAI

**English | [한국어](#한국어-설치-가이드) | [中文](#安装指南-中文版)**

---

## English

### System Requirements

| Item | Minimum |
|------|---------|
| OS | Windows 10 / macOS 12+ / Ubuntu 20.04+ |
| CPU | Dual-core 2.0GHz |
| RAM | 8GB |
| Disk | 5GB free space |
| Node.js | 18.x or higher |

### ⚠️ Disk Space Note

> The largest space consumer is **Ollama + LLM models** (~3-4GB). You can install Ollama on a different drive (D: drive on Windows, external drive on macOS). See the "Disk Space Solutions" section below.

### Two Runtime Options

| Option | LLM | Cost | Recommended For |
|--------|-----|------|-----------------|
| **A: Local Ollama** | Local open-source models | **Free** | Most students ✅ |
| **B: OpenAI API** | Cloud GPT models | Pay-per-use | Those needing stronger AI |

---

## Option A: Local Ollama (Recommended, Free)

### Step 1: Install Node.js

1. Visit [nodejs.org](https://nodejs.org)
2. Download **LTS version** (18.x or higher)
3. During installation, **check "Add to PATH"**
4. Verify:
   ```bash
   node --version   # Should show v18.x.x
   npm --version    # Should show 9.x.x or higher
