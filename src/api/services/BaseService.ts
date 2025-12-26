import { Logger, LoggerInterface } from '../../decorators/Logger';

export abstract class BaseService {
    protected log: LoggerInterface;

    constructor() {
        this.log = new (Logger as any)(__filename);
    }

    protected handleError(error: any, context: string): never {
        this.log.error(`Error in ${context}:`, error);
        throw error;
    }

    protected logInfo(message: string, data?: any): void {
        this.log.info(message, data);
    }

    protected logDebug(message: string, data?: any): void {
        this.log.debug(message, data);
    }

    protected logWarn(message: string, data?: any): void {
        this.log.warn(message, data);
    }
}
