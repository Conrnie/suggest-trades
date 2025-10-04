const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

// Log all requests
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.path}`);
    next();
});

// Alpha Vantage proxy
app.get('/api/alpha-vantage', async (req, res) => {
    try {
        const url = `https://www.alphavantage.co/query?${new URLSearchParams(req.query)}`;
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Alpha Vantage error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Financial Modeling Prep proxy
app.get('/api/fmp/*', async (req, res) => {
    try {
        const path = req.params[0];
        const url = `https://financialmodelingprep.com/api/v3/${path}?${new URLSearchParams(req.query)}`;
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('FMP error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// NewsAPI proxy
app.get('/api/news', async (req, res) => {
    try {
        const url = `https://newsapi.org/v2/everything?${new URLSearchParams(req.query)}`;
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('NewsAPI error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Anthropic Claude API proxy
app.post('/api/claude', async (req, res) => {
    try {
        const { apiKey, ...body } = req.body;
        
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error?.message || 'Claude API error');
        }
        
        res.json(data);
    } catch (error) {
        console.error('Claude API error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'AI Trading Agent Proxy Server is running' });
});

app.listen(PORT, () => {
    console.log('╔════════════════════════════════════════════════════════════╗');
    console.log('║                                                            ║');
    console.log('║        🚀 AI Trading Agent Proxy Server Running!          ║');
    console.log('║                                                            ║');
    console.log('╚════════════════════════════════════════════════════════════╝');
    console.log('');
    console.log(`✓ Server running on: http://localhost:${PORT}`);
    console.log(`✓ Health check: http://localhost:${PORT}/health`);
    console.log('');
    console.log('📊 API Endpoints:');
    console.log('  - Alpha Vantage: /api/alpha-vantage');
    console.log('  - FMP: /api/fmp/*');
    console.log('  - NewsAPI: /api/news');
    console.log('  - Claude AI: /api/claude');
    console.log('');
    console.log('💡 Now open ai-trading-agent.html in your browser');
    console.log('');
    console.log('Press Ctrl+C to stop the server');
    console.log('═══════════════════════════════════════════════════════════');
});