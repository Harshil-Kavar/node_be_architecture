#!/bin/bash

echo "🚀 Node.js Backend Boilerplate - Node.js 24"
echo "============================================="

# Check Node.js version
NODE_VERSION=$(node --version)
echo "📦 Node.js Version: $NODE_VERSION"

# Check if Node.js 24+
MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'.' -f1 | sed 's/v//')
if [ "$MAJOR_VERSION" -lt 24 ]; then
    echo "⚠️  Warning: Node.js 24+ recommended for full compatibility"
    echo "   Current version: $NODE_VERSION"
    echo "   Please upgrade to Node.js 24 or later"
    echo ""
fi

# Check if .env exists
if [ -f ".env" ]; then
    echo "✅ Environment file found"
else
    echo "📝 Creating .env from .env.example"
    cp .env.example .env
    echo "✅ .env file created - please configure your settings"
fi

echo ""
echo "🔧 Starting development server..."
echo "   API will be available at: http://localhost:3000/api"
echo "   Swagger docs at: http://localhost:3000/swagger"
echo ""

# Start the application
npm run dev