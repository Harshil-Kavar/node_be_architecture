import { HttpError } from 'routing-controllers';
import * as HttpStatus from 'http-status-codes';

export class InvalidFirebaseAuthentication extends HttpError {
    public name: string;

    constructor() {
        super(HttpStatus.UNAUTHORIZED, 'Firebase Authentication Error');
        this.name = InvalidFirebaseAuthentication.name;
    }
}
