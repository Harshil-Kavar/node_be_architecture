import { HttpError } from 'routing-controllers';
import * as HttpStatus from 'http-status-codes';

export class NotFoundError extends HttpError {
    public name: string;

    constructor(message: string = 'Not found') {
        super(HttpStatus.NOT_FOUND, message);
        this.name = NotFoundError.name;
    }
}
