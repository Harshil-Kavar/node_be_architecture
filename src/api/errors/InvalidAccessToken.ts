import { HttpError } from 'routing-controllers';
import * as HttpStatus from 'http-status-codes';

export class InvalidAccessToken extends HttpError {
    public name: string;

    constructor() {
        super(HttpStatus.UNAUTHORIZED, 'Invalid Request');
        this.name = InvalidAccessToken.name;
    }
}
