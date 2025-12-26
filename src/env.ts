import * as dotenv from 'dotenv';
import * as path from 'path';

import * as pkg from '../package.json';
import {
    getOsEnv,
    getOsEnvOptional,
    getOsPath,
    getOsPaths,
    normalizePort,
    toBool,
    toNumber
} from './lib/env';

// Load environment variables first
dotenv.config({ path: path.join(process.cwd(), '.dev.env') });

// TODO: All env files should be *.env as per convention
const extension_map: { [key: string]: string } = {
    production: '.env',
    development: '.dev.env',
    staging: '.env.staging',
    test: '.test.env'
};

/**
 * Environment variables
 */
export const env = {
    node: process.env.NODE_ENV || 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',
    isDevelopment: process.env.NODE_ENV === 'development',
    isStaging: process.env.NODE_ENV === 'staging',
    app: {
        name: getOsEnv('APP_NAME'),
        version: (pkg as any).version,
        description: (pkg as any).description,
        host: getOsEnv('APP_HOST'),
        schema: getOsEnv('APP_SCHEMA'),
        routePrefix: getOsEnv('APP_ROUTE_PREFIX'),
        port: normalizePort(process.env.PORT || getOsEnv('APP_PORT')),
        banner: toBool(getOsEnv('APP_BANNER')),
        dirs: {
            migrations: getOsPaths('TYPEORM_MIGRATIONS'),
            migrationsDir: getOsPath('TYPEORM_MIGRATIONS_DIR'),
            entities: getOsPaths('TYPEORM_ENTITIES'),
            entitiesDir: getOsPath('TYPEORM_ENTITIES_DIR'),
            controllers: getOsPaths('CONTROLLERS'),
            middlewares: getOsPaths('MIDDLEWARES'),
            interceptors: getOsPaths('INTERCEPTORS'),
            subscribers: getOsPaths('SUBSCRIBERS'),
            resolvers: getOsPaths('RESOLVERS')
        }
    },
    log: {
        level: getOsEnv('LOG_LEVEL'),
        json: toBool(getOsEnvOptional('LOG_JSON') || 'false'),
        output: getOsEnv('LOG_OUTPUT')
    },
    db: {
        type: getOsEnv('TYPEORM_CONNECTION'),
        host: getOsEnvOptional('TYPEORM_HOST'),
        port: toNumber(getOsEnvOptional('TYPEORM_PORT') || '3306'),
        username: getOsEnvOptional('TYPEORM_USERNAME'),
        password: getOsEnvOptional('TYPEORM_PASSWORD'),
        database: getOsEnv('TYPEORM_DATABASE'),
        synchronize: toBool(getOsEnvOptional('TYPEORM_SYNCHRONIZE') || 'false'),
        logging: getOsEnv('TYPEORM_LOGGING')
    },
    mongodb: {
        uris: getOsEnv('MONGO_URIS'),
        username: getOsEnvOptional('MONGO_USERNAME'),
        password: getOsEnvOptional('MONGO_PASSWORD'),
        replicaset: getOsEnvOptional('MONGO_REPLICASET')
    },
    redis: {
        host: getOsEnv('REDIS_HOST'),
        type: getOsEnv('REDIS_CLIENT')
    },
    swagger: {
        enabled: toBool(getOsEnv('SWAGGER_ENABLED')),
        route: getOsEnv('SWAGGER_ROUTE'),
        file: getOsEnv('SWAGGER_FILE'),
        username: getOsEnv('SWAGGER_USERNAME'),
        password: getOsEnv('SWAGGER_PASSWORD')
    },
    monitor: {
        enabled: toBool(getOsEnv('MONITOR_ENABLED')),
        route: getOsEnv('MONITOR_ROUTE'),
        username: getOsEnv('MONITOR_USERNAME'),
        password: getOsEnv('MONITOR_PASSWORD')
    },
    jwt: {
        name: getOsEnv('JWT_NAME'),
        access_token_expiry: getOsEnv('JWT_ACCESS_EXPIRY'),
        refresh_token_expiry: getOsEnv('JWT_REFRESH_EXPIRY'),
        access_token_secret: getOsEnv('JWT_ACCESS_SECRET'),
        refresh_token_secret: getOsEnv('JWT_REFRESH_SECRET')
    },
    cors: {
        origin: getOsEnv('ORIGIN')
    }
};
