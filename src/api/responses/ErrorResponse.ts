export class ErrorResponse {
    public status: number;
    public message: string;
    public error: boolean;

    constructor(status: number, message: string) {
        this.status = status;
        this.message = message;
        this.error = true;
    }
}
