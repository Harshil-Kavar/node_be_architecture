import * as express from 'express';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';

@Middleware({ type: 'before' })
export class BasicAuthInternalMiddleware implements ExpressMiddlewareInterface {
    public use(
        req: express.Request,
        res: express.Response,
        next?: express.NextFunction
    ): any {
        const authHeader = req.headers.authorization;
        
        if (!authHeader || !authHeader.startsWith('Basic ')) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        if (next) {
            next();
        }
    }
}