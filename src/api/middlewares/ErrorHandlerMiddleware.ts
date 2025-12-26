import * as express from 'express';
import {
    ExpressErrorMiddlewareInterface,
    HttpError,
    Middleware
} from 'routing-controllers';

import { Logger, LoggerInterface } from '../../decorators';
import { env } from '../../env';

@Middleware({ type: 'after' })
export class ErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface {
    public isProduction = env.isProduction;
    public isTesting = env.isTest;

    constructor(@Logger(__filename) private log: LoggerInterface) {}

    public error(
        error: any,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ): void {
        if (error.httpCode === 403 && error.name === 'AccessDeniedError') {
            error.httpCode = 401;
        }

        res.status(error.httpCode || 500);
        res.json({
            code: error.httpCode || 500,
            name: error.name,
            message: error.message
        });

        if (this.isProduction || this.isTesting) {
            this.log.error(error.name, error.message);
        } else {
            this.log.error(error);
            this.log.debug(error);
            console.log(error);
        }
    }
}