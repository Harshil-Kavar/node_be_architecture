# Node.js 22+ Compatibility

This boilerplate is specifically designed for **Node.js version 22 and higher**.

## Version Requirements

- **Node.js**: >= 22.0.0
- **npm**: >= 10.0.0
- **TypeScript**: ^5.7.2

## Features Leveraging Node.js 22+

### Modern JavaScript Support
- **ES2022 Target**: Full support for modern JavaScript features
- **Native ESM**: Enhanced ES module support
- **Top-level await**: Available in all contexts
- **Private class fields**: Native support without transpilation

### Performance Improvements
- **V8 Engine**: Latest V8 optimizations
- **HTTP/2**: Enhanced HTTP/2 support
- **Worker Threads**: Improved worker thread performance
- **Memory Management**: Better garbage collection

### Security Enhancements
- **Permissions Model**: Fine-grained permission controls
- **Crypto Updates**: Latest cryptographic algorithms
- **TLS 1.3**: Enhanced security protocols

## Compatibility Check

The boilerplate includes automatic Node.js version checking:

```bash
# Automatic version check on start
npm start

# Manual version check
node scripts/check-node-version.js
```

## Dependencies Compatibility

All dependencies have been selected for Node.js 22+ compatibility:

- **TypeScript 5.7.2**: Full Node.js 22 support
- **Express 4.21.1**: Latest stable with Node.js 22 optimizations
- **Mongoose 8.8.3**: Native Node.js 22 compatibility
- **ESLint 9.15.0**: Modern linting with Node.js 22 support