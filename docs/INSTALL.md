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
Step 2: Install Git
Windows: Download from git-scm.com

macOS: brew install git

Linux: sudo apt install git

Step 3: Install Ollama
Visit ollama.com

Download and install for your OS

Step 4: Download an LLM Model
bash
# Smallest model (~2GB, good for beginners)
ollama pull phi3:mini

# Better Chinese support (~4GB)
ollama pull qwen2:7b

# Most capable (~4.7GB)
ollama pull llama3.1:8b
Step 5: Clone and Run
bash
# Clone the project
git clone https://github.com/vfvincentwong2026/polis-ai.git
cd polis-ai

# Install dependencies
npm install

# Set up environment
cp .env.example .env.local

# Configure for Ollama
echo "OLLAMA_ENDPOINT=http://localhost:11434" >> .env.local

# Start backend
npx convex dev

# Start frontend (new terminal)
npm run dev
Open http://localhost:5173

Option B: OpenAI API (Paid)
Sign up at platform.openai.com

Create an API Key

Create .env.local in project root:

text
OPENAI_API_KEY=sk-your-key-here
Follow Step 5 above (skip Ollama steps)

Disk Space Solutions
Windows: Install Ollama on D: Drive
cmd
# Run as Administrator
setx OLLAMA_MODELS "D:\OllamaModels"
macOS: Use External Drive
bash
export OLLAMA_MODELS=/Volumes/ExternalDrive/OllamaModels
Linux: Use Custom Path
bash
export OLLAMA_MODELS=/mnt/bigdrive/OllamaModels
Troubleshooting
"npx convex dev" fails
Ensure Node.js 18+ is installed

Ensure network is stable (first run requires Convex account — free)

Visit convex.dev to sign up

Port already in use
bash
# macOS/Linux
lsof -i :5173

# Windows
netstat -ano | findstr :5173

# Run on different port
npm run dev -- --port 5174
Ollama not responding
bash
# Check if Ollama is running
curl http://localhost:11434
# Should return: "Ollama is running"

# Restart Ollama
ollama serve
Model not found
bash
# List installed models
ollama list

# Pull the model you need
ollama pull qwen2:7b
Verification
After starting, you should see:

✅ Browser opens with the town map

✅ Agents moving around

✅ Clicking an agent shows a dialogue bubble

✅ No red errors in the console

🎉 You're ready to go!

Need Help?
Open an Issue: GitHub Issues

Contact: Vincent Wong (vfvincentwong@gmail.com)

한국어 설치 가이드
시스템 요구사항
항목	최소 사양
OS	Windows 10 / macOS 12+ / Ubuntu 20.04+
CPU	듀얼코어 2.0GHz
RAM	8GB
디스크	5GB 여유 공간
Node.js	18.x 이상
Ollama로 무료 실행하기
bash
# 1. 프로젝트 클론
git clone https://github.com/vfvincentwong2026/polis-ai.git
cd polis-ai

# 2. 의존성 설치
npm install

# 3. Ollama 설정
echo "OLLAMA_ENDPOINT=http://localhost:11434" >> .env.local

# 4. 실행
npx convex dev
npm run dev
💡 디스크 공간 부족 시
cmd
# Windows (관리자 모드)
setx OLLAMA_MODELS "D:\OllamaModels"
도움이 필요하신가요?
이슈 등록: GitHub Issues

문의: Vincent Wong (vfvincentwong@gmail.com)

安装指南 (中文版)
系统要求
项目	最低要求
操作系统	Windows 10 / macOS 12+ / Ubuntu 20.04+
CPU	双核 2.0GHz
内存	8GB
硬盘	5GB 可用空间
Node.js	18.x 或更高
使用 Ollama 免费运行
bash
# 1. 克隆项目
git clone https://github.com/vfvincentwong2026/polis-ai.git
cd polis-ai

# 2. 安装依赖
npm install

# 3. 配置 Ollama
echo "OLLAMA_ENDPOINT=http://localhost:11434" >> .env.local

# 4. 启动
npx convex dev
npm run dev
💡 C盘空间不足
cmd
# Windows (管理员模式)
setx OLLAMA_MODELS "D:\OllamaModels"
需要帮助？
提交 Issue: GitHub Issues

联系: Vincent Wong (vfvincentwong@gmail.com)
