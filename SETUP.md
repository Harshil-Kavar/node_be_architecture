# Setup Guide

This guide will help you set up the Node.js Backend Boilerplate for development.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (v4.0 or higher)
- **Redis** (v5.0 or higher)
- **MySQL** or **PostgreSQL** (optional, for TypeORM)

## Step-by-Step Setup

### 1. Clone and Install

```bash
# Clone the repository
git clone <your-repository-url>
cd node-backend-boilerplate

# Install dependencies
npm install
# or
yarn install
```

### 2. Environment Configuration

```bash
# Copy the example environment file
cp .env.example .env
```

Edit the `.env` file with your configuration:

```env
# Application
APP_NAME=my-awesome-api
APP_PORT=3000
APP_ROUTE_PREFIX=/api

# MongoDB
MONGO_URIS=mongodb://localhost:27017/my_database

# Redis
REDIS_HOST=localhost:6379

# JWT Secrets (Change these!)
JWT_ACCESS_SECRET=your-super-secret-access-key
JWT_REFRESH_SECRET=your-super-secret-refresh-key
```

### 3. Database Setup

#### MongoDB Setup

**Option A: Local MongoDB**
```bash
# Install MongoDB (Ubuntu/Debian)
sudo apt update
sudo apt install mongodb

# Start MongoDB service
sudo systemctl start mongod
sudo systemctl enable mongod

# Verify MongoDB is running
sudo systemctl status mongod
```

**Option B: MongoDB Docker**
```bash
# Run MongoDB in Docker
docker run -d --name mongodb -p 27017:27017 mongo:latest
```

**Option C: MongoDB Atlas (Cloud)**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a cluster
3. Get connection string and update `MONGO_URIS` in `.env`

#### Redis Setup

**Option A: Local Redis**
```bash
# Install Redis (Ubuntu/Debian)
sudo apt update
sudo apt install redis-server

# Start Redis service
sudo systemctl start redis-server
sudo systemctl enable redis-server

# Test Redis
redis-cli ping
```

**Option B: Redis Docker**
```bash
# Run Redis in Docker
docker run -d --name redis -p 6379:6379 redis:latest
```

### 4. Optional: SQL Database (TypeORM)

If you want to use TypeORM with SQL databases:

**MySQL Setup**
```bash
# Install MySQL
sudo apt update
sudo apt install mysql-server

# Secure installation
sudo mysql_secure_installation

# Create database
mysql -u root -p
CREATE DATABASE my_database;
```

Update your `.env`:
```env
TYPEORM_CONNECTION=mysql
TYPEORM_HOST=localhost
TYPEORM_PORT=3306
TYPEORM_USERNAME=root
TYPEORM_PASSWORD=your_password
TYPEORM_DATABASE=my_database
```

### 5. Start the Application

```bash
# Development mode with hot reload
npm start serve
# or
yarn start serve

# Build for production
npm start build
# or
yarn start build
```

### 6. Verify Installation

Once the server is running, you can verify the installation:

1. **Health Check**: Visit `http://localhost:3000/api`
2. **Swagger Documentation**: Visit `http://localhost:3000/swagger`
3. **Monitor**: Visit `http://localhost:3000/monitor`

### 7. Test the API

Create a test user:
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "password": "password123"
  }'
```

Login:
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

## Docker Setup (Alternative)

If you prefer using Docker:

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or run individual services
docker-compose up mongodb redis
npm start serve
```

## Troubleshooting

### Common Issues

**MongoDB Connection Error**
- Ensure MongoDB is running: `sudo systemctl status mongod`
- Check connection string in `.env`
- Verify network connectivity

**Redis Connection Error**
- Ensure Redis is running: `sudo systemctl status redis-server`
- Test Redis: `redis-cli ping`
- Check Redis host/port in `.env`

**Port Already in Use**
- Change `APP_PORT` in `.env`
- Kill process using the port: `sudo lsof -t -i:3000 | xargs kill -9`

**Permission Errors**
- Use `sudo` for system service commands
- Check file permissions: `chmod +x start.sh`

### Logs

Check application logs for detailed error information:
```bash
# View logs in development
npm start serve

# View system service logs
sudo journalctl -u mongod
sudo journalctl -u redis-server
```

## Next Steps

1. **Customize Models**: Modify `src/api/models/examples/User.ts`
2. **Add Controllers**: Create new controllers in `src/api/controllers/`
3. **Configure Database**: Set up migrations and seeds
4. **Add Tests**: Write tests in `test/` directory
5. **Deploy**: Configure for your deployment environment

## Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Review example code in `src/api/*/examples/`
- Open an issue if you encounter problems