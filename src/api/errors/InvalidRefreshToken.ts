import { HttpError } from 'routing-controllers';
import * as HttpStatus from 'http-status-codes';

export class InvalidRefreshToken extends HttpError {
    public name: string;

    constructor() {
        super(HttpStatus.FORBIDDEN, 'Invalid Request');
        this.name = InvalidRefreshToken.name;
    }
}
