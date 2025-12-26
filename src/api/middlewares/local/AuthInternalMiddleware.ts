import * as express from 'express';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
import { env } from '../../../env';

@Middleware({ type: 'before' })
export class AuthInternalMiddleware implements ExpressMiddlewareInterface {
    public use(
        req: express.Request,
        res: express.Response,
        next?: express.NextFunction
    ): any {
        const authHeader = req.headers.authorization;
        
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        if (next) {
            next();
        }
    }
}