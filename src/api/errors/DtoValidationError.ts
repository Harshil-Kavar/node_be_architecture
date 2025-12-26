import { HttpError } from 'routing-controllers';
import * as HttpStatus from 'http-status-codes';

export class DtoValidationError extends HttpError {
    public name: string;

    constructor(error: any) {
        super(HttpStatus.BAD_REQUEST, error);
        this.name = DtoValidationError.name;
    }
}
