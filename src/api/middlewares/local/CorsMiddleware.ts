import * as express from 'express';
import * as cors from 'cors';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
import { env } from '../../../env';

@Middleware({ type: 'before' })
export class CorsMiddleware implements ExpressMiddlewareInterface {
    public use(
        req: express.Request,
        res: express.Response,
        next?: express.NextFunction
    ): any {
        return cors.default({
            origin: env.cors.origin === '*' ? true : env.cors.origin,
            credentials: true
        })(req, res, next || (() => {}));
    }
}