# Node.js Backend Boilerplate

A comprehensive, production-ready Node.js backend boilerplate built with TypeScript, Express, TypeORM, MongoDB, and Redis. This boilerplate provides a solid foundation for building scalable REST APIs with modern development practices.

![divider](./w3tec-divider.png)

## ✨ Features

- **TypeScript** - Type safety and modern JavaScript features
- **Express.js** - Fast, unopinionated web framework
- **TypeORM** - Object-relational mapping with SQL database support
- **MongoDB** - NoSQL database with Mongoose ODM
- **Redis** - In-memory data structure store for caching
- **JWT Authentication** - Secure token-based authentication
- **Routing Controllers** - Decorator-based routing with validation
- **Dependency Injection** - Clean architecture with TypeDI
- **Swagger Documentation** - Auto-generated API documentation
- **Winston Logging** - Structured logging with multiple transports
- **Docker Support** - Containerized development and deployment
- **Testing Setup** - Jest testing framework configuration
- **Code Quality** - TSLint, Prettier, and Husky pre-commit hooks

![divider](./w3tec-divider.png)

## 🚀 Quick Start

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn
- MongoDB
- Redis
- MySQL/PostgreSQL (optional, for TypeORM)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd node-backend-boilerplate
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file with your configuration

4. **Start the application**
   ```bash
   npm start serve
   # or
   yarn start serve
   ```

The server will start at `http://localhost:3000`

![divider](./w3tec-divider.png)

## 📁 Project Structure

```
src/
├── api/
│   ├── controllers/           # Route controllers
│   │   ├── examples/         # Example controllers (User, Auth)
│   │   └── BaseController.ts # Base controller class
│   ├── models/               # Data models
│   │   └── examples/         # Example models
│   ├── services/             # Business logic services
│   │   └── examples/         # Example services
│   ├── repositories/         # Data access layer
│   ├── middlewares/          # Express middlewares
│   ├── validators/           # Request validation DTOs
│   │   └── examples/         # Example DTOs
│   ├── responses/            # Response interfaces
│   └── errors/               # Custom error classes
├── auth/                     # Authentication logic
├── lib/                      # Utility functions
├── loaders/                  # Application loaders
├── decorators/               # Custom decorators
├── database/                 # Database related files
│   ├── migrations/           # Database migrations
│   ├── seeds/                # Database seeders
│   └── factories/            # Data factories
└── types/                    # TypeScript type definitions
```

![divider](./w3tec-divider.png)

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm start serve` | Start development server with hot reload |
| `npm start build` | Build the application for production |
| `npm start test` | Run unit tests |
| `npm start lint` | Run code linting |
| `npm start db.migrate` | Run database migrations |
| `npm start db.seed` | Seed the database with sample data |

![divider](./w3tec-divider.png)

## 🔧 Configuration

### Environment Variables

Key environment variables you need to configure:

```env
# Application
APP_NAME=your-app-name
APP_PORT=3000
APP_ROUTE_PREFIX=/api

# Database
MONGO_URIS=mongodb://localhost:27017/your-db
TYPEORM_CONNECTION=mysql
TYPEORM_HOST=localhost
TYPEORM_DATABASE=your-db

# JWT
JWT_ACCESS_SECRET=your-secret-key
JWT_REFRESH_SECRET=your-refresh-secret

# Redis
REDIS_HOST=localhost:6379
```

### Database Setup

**MongoDB:**
```bash
# Start MongoDB service
sudo systemctl start mongod
```

**MySQL/PostgreSQL (for TypeORM):**
```bash
# Create database
mysql -u root -p
CREATE DATABASE your_database_name;
```

![divider](./w3tec-divider.png)

## 📚 API Documentation

Once the server is running, you can access:

- **Swagger UI**: `http://localhost:3000/swagger`
- **API Monitor**: `http://localhost:3000/monitor`
- **Health Check**: `http://localhost:3000/api`

### Example Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| POST | `/api/users` | Create new user |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |
| POST | `/api/auth/login` | User login |
| POST | `/api/auth/refresh` | Refresh JWT token |

![divider](./w3tec-divider.png)

## 🐳 Docker Support

### Development
```bash
docker-compose up
```

### Production
```bash
docker build -t your-app-name .
docker run -p 3000:3000 your-app-name
```

![divider](./w3tec-divider.png)

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

![divider](./w3tec-divider.png)

## 🏗️ Architecture Patterns

### Dependency Injection
Using TypeDI for clean dependency management:

```typescript
@Service()
export class UserService {
    constructor(
        @Logger(__filename) private log: LoggerInterface
    ) {}
}
```

### Validation
Request validation using class-validator:

```typescript
export class CreateUserDto {
    @IsEmail()
    public email: string;

    @IsString()
    @MinLength(2)
    public firstName: string;
}
```

### Error Handling
Centralized error handling with custom error classes:

```typescript
throw new NotFoundError('User not found');
```

![divider](./w3tec-divider.png)

## 🔒 Security Features

- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **JWT** - Token-based authentication
- **bcrypt** - Password hashing
- **Rate limiting** - Request rate limiting
- **Input validation** - Request validation

![divider](./w3tec-divider.png)

## 📈 Performance

- **Compression** - Response compression
- **Redis caching** - In-memory caching
- **Database indexing** - Optimized queries
- **Connection pooling** - Database connection management

![divider](./w3tec-divider.png)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

![divider](./w3tec-divider.png)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

![divider](./w3tec-divider.png)

## 🙏 Acknowledgments

- [w3tec](https://github.com/w3tecch) for the original boilerplate inspiration
- [TypeStack](https://github.com/typestack) for amazing TypeScript libraries
- All the open-source contributors who made this possible