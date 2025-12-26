export interface EventDispatcherInterface {
    dispatch(eventName: string, data?: any): void;
}

export class EventDispatcherService implements EventDispatcherInterface {
    public dispatch(eventName: string, data?: any): void {
        console.log(`Event dispatched: ${eventName}`, data);
    }
}

export function EventDispatcher(target: any, propertyName: string, index?: number): void {
    // Simple decorator implementation
}