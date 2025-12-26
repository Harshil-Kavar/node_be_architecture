#!/bin/bash
echo "🚀 Starting Node.js Backend Boilerplate..."
echo "Note: This requires Node.js 24+ for full compatibility"
echo "Current Node.js version: $(node --version)"
echo ""

if [ -f ".env" ]; then
    echo "✅ Environment file found"
else
    echo "⚠️  Creating .env from .env.example"
    cp .env.example .env
fi

echo "🔧 Starting with ts-node..."
npx ts-node src/app.ts