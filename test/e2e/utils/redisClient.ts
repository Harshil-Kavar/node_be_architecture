import { RedisConnection } from '../../../src/api/connections';
import { env } from '../../../src/env';
import { Inject } from 'typedi';

export class RedisExtra {
    constructor(
        @Inject(env.redis.type)
        private redisClient: RedisConnection
    ) {}

    public getAgent(): any {
        return this.redisClient.getAgent();
    }
}
