import express from 'express';
import * as jwt from 'jsonwebtoken';
import { Service } from 'typedi';
import { Logger, LoggerInterface } from '../decorators';
import { env } from '../env';

@Service()
export class AuthService {
    public static validateTokenAndReturnPayload(
        token: string,
        request: any
    ): Promise<object> {
        return new Promise<object>((resolve, reject) => {
            try {
                const data = jwt.verify(token, env.jwt.access_token_secret);
                if (typeof data === 'string') {
                    reject(new Error('Invalid token payload'));
                } else {
                    resolve(data as object);
                }
            } catch (err) {
                reject(err);
            }
        });
    }

    public static authorizationChecker(
        request: any,
        roles: string[]
    ): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            try {
                let token = request.headers.authorization;
                if (!token) {
                    resolve(false);
                    return;
                }

                const regex = `${env.jwt.name} `;
                token = token.replace(regex, '');

                const payload: any = jwt.verify(token, env.jwt.access_token_secret);

                if (!roles.length) {
                    resolve(true);
                    return;
                }

                if (payload.roles && roles.some(role => payload.roles.includes(role))) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            } catch (error) {
                resolve(false);
            }
        });
    }

    constructor(
        @Logger(__filename) private log: LoggerInterface
    ) {}

    public verifyToken(request: any): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            try {
                const token = this.extractToken(request);
                if (!token) {
                    resolve(false);
                    return;
                }

                jwt.verify(token, env.jwt.access_token_secret);
                resolve(true);
            } catch (error) {
                resolve(false);
            }
        });
    }

    public async tokenRefresh(request: express.Request): Promise<any | undefined> {
        return new Promise<any | undefined>((resolve, reject) => {
            try {
                const token = this.extractToken(request);
                if (!token) {
                    resolve(-1);
                    return;
                }

                const payload = jwt.verify(token, env.jwt.refresh_token_secret);
                if (typeof payload === 'string') {
                    resolve(-1);
                    return;
                }

                const payloadObj = payload as any;

                const accessToken = jwt.sign(
                    {
                        userId: payloadObj.userId,
                        email: payloadObj.email,
                        roles: payloadObj.roles
                    },
                    env.jwt.access_token_secret
                );

                resolve({
                    access_token: accessToken,
                    user: {
                        userId: payloadObj.userId,
                        email: payloadObj.email
                    }
                });
            } catch (error) {
                reject(undefined);
            }
        });
    }

    public async loggedOutUser(request: any): Promise<boolean> {
        return true;
    }

    private extractToken(request: any): string | undefined {
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            return undefined;
        }

        const regex = `${env.jwt.name} `;
        return authHeader.replace(regex, '');
    }
}
