import { HttpError } from 'routing-controllers';
import * as HttpStatus from 'http-status-codes';

export class InvalidSkillsPayload extends HttpError {
    public name: string;

    constructor(message: string = 'Invalid Skills Payload') {
        super(HttpStatus.METHOD_NOT_ALLOWED, message);
        this.name = InvalidSkillsPayload.name;
    }
}
