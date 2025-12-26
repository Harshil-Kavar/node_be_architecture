#!/usr/bin/env node

const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);

console.log(`Current Node.js version: ${nodeVersion}`);

if (majorVersion < 22) {
    console.error('❌ Error: This boilerplate requires Node.js version 22 or higher');
    console.error(`   Current version: ${nodeVersion}`);
    console.error('   Please upgrade Node.js to version 22 or higher');
    process.exit(1);
}

console.log('✅ Node.js version compatibility check passed');
console.log('🚀 Starting the application...');