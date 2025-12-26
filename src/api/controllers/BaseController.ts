import { Response } from 'express';
import * as HttpStatus from 'http-status-codes';

export class BaseController {
    protected sendSuccess(res: Response, data: any, message: string = 'Success'): Response {
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            message,
            data
        });
    }

    protected sendCreated(res: Response, data: any, message: string = 'Created successfully'): Response {
        return res.status(HttpStatus.CREATED).json({
            status: HttpStatus.CREATED,
            message,
            data
        });
    }

    protected sendError(res: Response, message: string, statusCode: number = HttpStatus.INTERNAL_SERVER_ERROR): Response {
        return res.status(statusCode).json({
            status: statusCode,
            message,
            error: true
        });
    }

    protected sendNotFound(res: Response, message: string = 'Resource not found'): Response {
        return res.status(HttpStatus.NOT_FOUND).json({
            status: HttpStatus.NOT_FOUND,
            message,
            error: true
        });
    }

    protected sendBadRequest(res: Response, message: string = 'Bad request'): Response {
        return res.status(HttpStatus.BAD_REQUEST).json({
            status: HttpStatus.BAD_REQUEST,
            message,
            error: true
        });
    }
}
