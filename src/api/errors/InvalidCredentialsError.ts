import { HttpError } from 'routing-controllers';

export class InvalidCredentialError extends HttpError {
    constructor() {
        super(403, 'Invalid Credentials');
    }
}
