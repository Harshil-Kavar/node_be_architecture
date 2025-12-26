export class BaseResponse<T = any> {
    public status: number;
    public message: string;
    public data: T;

    constructor(status: number, message: string, data: T) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}
