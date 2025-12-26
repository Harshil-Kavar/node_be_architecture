import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
import * as bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';
@Middleware({ type: 'before' })
export class BodyParserMiddleware implements ExpressMiddlewareInterface {
    private readonly jsonBodyParser;

    constructor() {
        this.jsonBodyParser = bodyParser.json({ limit: '50mb' });
    }

    public use(req: Request, res: Response, next: NextFunction): void {
        if (req.headers && req.headers.language) {
            const language = req.headers.language;
            if (language === 'he') {
                req.headers.language = 'en';
            }
        }
        this.jsonBodyParser(req, res, next);
    }
}
