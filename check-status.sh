#!/bin/bash

echo "🔍 Checking Node.js Backend Boilerplate Status..."
echo "=================================================="

# Check Node.js version
echo "📦 Node.js Version:"
node --version
echo ""

# Check if package.json exists
if [ -f "package.json" ]; then
    echo "✅ package.json found"
else
    echo "❌ package.json missing"
    exit 1
fi

# Check if src directory exists
if [ -d "src" ]; then
    echo "✅ src directory found"
else
    echo "❌ src directory missing"
    exit 1
fi

# Check key files
echo ""
echo "📁 Key Files Check:"
files=(
    "src/app.ts"
    "src/env.ts"
    "src/api/controllers/BaseController.ts"
    "src/api/controllers/examples/UserController.ts"
    "src/api/controllers/examples/AuthController.ts"
    "src/api/models/examples/User.ts"
    "src/api/services/examples/UserService.ts"
    "src/auth/AuthService.ts"
    ".env.example"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file missing"
    fi
done

echo ""
echo "🏗️ Architecture Check:"

# Check if essential directories exist
dirs=(
    "src/api/controllers/examples"
    "src/api/models/examples"
    "src/api/services/examples"
    "src/api/repositories/examples"
    "src/api/validators/examples"
    "src/api/responses"
    "src/auth"
    "src/lib"
    "src/loaders"
)

for dir in "${dirs[@]}"; do
    if [ -d "$dir" ]; then
        echo "✅ $dir/"
    else
        echo "❌ $dir/ missing"
    fi
done

echo ""
echo "🎯 Boilerplate Status: Ready for development!"
echo "📖 Next steps:"
echo "   1. Copy .env.example to .env"
echo "   2. Configure your database connections"
echo "   3. Run: npm install"
echo "   4. Run: npm start serve"