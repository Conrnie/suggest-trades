# AI Trading Agent - Setup Instructions

## 📋 Prerequisites

You need **Node.js** installed on your computer.

### Check if you have Node.js:
```bash
node --version
```

If you see a version number (like `v18.0.0`), you're good! If not, install it:
- **Download:** https://nodejs.org/ (Get the LTS version)

---

## 🚀 Installation Steps

### Step 1: Create Project Folder

Create a new folder on your computer, for example:
- `C:\trading-agent\` (Windows)
- `~/trading-agent/` (Mac/Linux)

### Step 2: Save the Files

Save these 3 files in your folder:

1. **proxy-server.js** - The backend proxy server
2. **ai-trading-agent.html** - The frontend interface
3. **package.json** - Dependencies (create this file):

```json
{
  "name": "ai-trading-agent-proxy",
  "version": "1.0.0",
  "description": "Proxy server for AI Trading Agent",
  "main": "proxy-server.js",
  "scripts": {
    "start": "node proxy-server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "node-fetch": "^2.7.0"
  }
}
```

Your folder structure should look like:
```
trading-agent/
├── proxy-server.js
├── ai-trading-agent.html
└── package.json
```

### Step 3: Install Dependencies

Open a terminal/command prompt in your project folder and run:

```bash
npm install
```

This installs the required packages (express, cors, node-fetch).

### Step 4: Get Your API Keys

#### Required:
1. **Alpha Vantage** (Free): https://www.alphavantage.co/support/#api-key
2. **Anthropic** (~$10-15/month): https://console.anthropic.com/
   - Create account
   - Add $10 credit
   - Create API key (starts with `sk-ant-...`)

#### Recommended:
3. **Financial Modeling Prep** (Free): https://site.financialmodelingprep.com/developer
4. **NewsAPI** (Free): https://newsapi.org/register

---

## ▶️ Running the Application

### Step 1: Start the Proxy Server

In your terminal, run:

```bash
node proxy-server.js
```

Or:

```bash
npm start
```

You should see:
```
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║        🚀 AI Trading Agent Proxy Server Running!          ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

✓ Server running on: http://localhost:3000
✓ Health check: http://localhost:3000/health
```

**⚠️ Keep this terminal window open!** The server must stay running.

### Step 2: Open the Web Interface

1. Open your browser (Chrome/Firefox recommended)
2. Open the file `ai-trading-agent.html`
   - You can drag & drop it into the browser
   - Or right-click → Open with → Chrome

### Step 3: Configure Settings

1. Click the **Settings** tab
2. Enter all your API keys:
   - Alpha Vantage API Key
   - Anthropic API Key
   - Financial Modeling Prep Key (optional)
   - NewsAPI Key (optional)
3. Set your portfolio:
   - Capital: $100 (for paper trading)
   - Risk per trade: 1%

### Step 4: Run Your First Scan

1. Go to **Signals** tab
2. Click **"Start AI Market Scan"**
3. Wait ~5-6 minutes for results
4. Check **AI Logs** tab to see real-time progress

---

## 🔧 Troubleshooting

### "Cannot find module 'express'"
**Problem:** Dependencies not installed
**Solution:** Run `npm install` in the project folder

### "Port 3000 already in use"
**Problem:** Another app is using port 3000
**Solution:** Close other apps or edit `proxy-server.js` and change `PORT = 3000` to `PORT = 3001`

### "Failed to fetch" in browser
**Problem:** Proxy server not running
**Solution:** Make sure `node proxy-server.js` is running in terminal

### "API key invalid" errors
**Problem:** Wrong API key or not activated
**Solution:** 
- Check keys on provider websites
- Make sure you activated them (some need email confirmation)
- For Anthropic: Make sure you added credit to your account

### Alpha Vantage rate limit
**Problem:** "API limit reached"
**Solution:** 
- Wait 1 minute between scans
- Free tier = 5 calls/minute, 500/day
- Reduce watchlist size

---

## 💡 Daily Usage

1. **Start the proxy server** (once per session):
   ```bash
   node proxy-server.js
   ```

2. **Open ai-trading-agent.html** in browser

3. **Run scan after market close**:
   - Best time: 4:30 PM ET (22:30 CET)
   - Takes ~5-6 minutes for 24 stocks

4. **Review signals**:
   - Check top 5 AI-generated signals
   - Review fundamentals and sentiment
   - Paper trade first!

5. **Close when done**:
   - Press `Ctrl+C` in terminal to stop server

---

## 📊 API Costs

**One-time:**
- Alpha Vantage: FREE
- FMP: FREE  
- NewsAPI: FREE
- Anthropic: $10 minimum deposit

**Monthly:**
- ~$10-15 for daily scans (24 stocks)
- Each scan: ~$0.30-0.50

---

## ⚠️ Important Notes

- **Paper trade first!** Test for weeks before using real money
- **Run after market close** for accurate data
- **Keep proxy server running** while using the app
- **API keys are stored in browser** (localStorage)
- **Rate limits:** Alpha Vantage free = 5 calls/min

---

## 🆘 Need Help?

Common issues and solutions are listed in Troubleshooting above.

Remember: This is a research tool, not financial advice. Always do your own due diligence before trading!

---

**Ready to start? Run `node proxy-server.js` and open the HTML file!** 🚀