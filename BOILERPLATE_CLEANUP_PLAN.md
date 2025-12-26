# Node.js Backend Boilerplate Cleanup Plan

## Overview
Transform the current WorkEx-specific application into a reusable Node.js backend boilerplate template.

## Files to Remove (App-Specific)
### Controllers
- All controllers in `src/api/controllers/` except basic examples
- Keep: Basic structure examples for User, Auth patterns

### Models & Repositories  
- All MongoDB models in `src/api/models/mongo-models/`
- All repositories in `src/api/repositories/mongo-repository/`
- Keep: Base classes and interfaces

### Services
- All business logic services in `src/api/services/`
- Keep: Base service patterns and infrastructure services

### Middleware
- App-specific middleware in `src/api/middlewares/`
- Keep: Basic security, logging, error handling middleware

### Other App-Specific
- `src/api/constants/` - Remove all business constants
- `src/api/elastic-query-builder/` - Remove all
- `src/api/validators/` - Keep basic validation examples
- `src/api/responses/` - Keep basic response patterns
- `src/mappings/` - Remove all
- `seed/` - Remove all app-specific seeds
- `temp/` - Remove entirely

## Files to Keep & Clean
### Core Infrastructure
- `src/app.ts` - Clean up loaders
- `src/env.ts` - Keep essential env vars only
- `src/lib/` - Keep all utility functions
- `src/loaders/` - Keep essential loaders, remove app-specific ones
- `src/auth/` - Keep basic auth patterns
- `src/decorators/` - Keep all
- `src/database/` - Keep structure, clean examples

### Configuration Files
- `package.json` - Remove app-specific dependencies
- `tsconfig.json`, `tslint.json` - Keep
- `nodemon.json` - Keep
- `docker-compose.yaml` - Simplify for basic setup

## New Boilerplate Structure
```
src/
├── api/
│   ├── controllers/
│   │   ├── examples/
│   │   │   ├── UserController.ts
│   │   │   └── AuthController.ts
│   │   └── BaseController.ts
│   ├── models/
│   │   ├── examples/
│   │   │   └── User.ts
│   │   └── BaseModel.ts
│   ├── services/
│   │   ├── examples/
│   │   │   └── UserService.ts
│   │   └── BaseService.ts
│   ├── repositories/
│   │   ├── examples/
│   │   │   └── UserRepository.ts
│   │   └── BaseRepository.ts
│   ├── middlewares/
│   │   ├── AuthMiddleware.ts
│   │   ├── ErrorHandlerMiddleware.ts
│   │   └── LogMiddleware.ts
│   ├── validators/
│   │   └── examples/
│   │       └── UserDto.ts
│   └── responses/
│       ├── BaseResponse.ts
│       └── ErrorResponse.ts
├── auth/
├── lib/
├── loaders/
└── database/
    ├── migrations/
    ├── seeds/
    └── factories/
```

## Environment Variables to Keep
- APP_* (basic app config)
- DB_* (database config)
- JWT_* (authentication)
- LOG_* (logging)
- REDIS_* (caching)
- Basic service configs

## Dependencies to Remove
- App-specific packages (elasticsearch, firebase-admin, razorpay, etc.)
- Keep: Core framework dependencies (express, typeorm, routing-controllers, etc.)

## New Documentation
- Update README.md with generic boilerplate instructions
- Create SETUP.md for quick start guide
- Add ARCHITECTURE.md explaining the structure