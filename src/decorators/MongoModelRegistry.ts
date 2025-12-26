import { Container } from 'typedi';

export interface MongoRepository<T> {
    find(): Promise<T[]>;
    findById(id: string): Promise<T | null>;
    create(data: Partial<T>): Promise<T>;
    update(id: string, data: Partial<T>): Promise<T | null>;
    delete(id: string): Promise<boolean>;
}

export function MongoModelRegistry(target: any): any {
    Container.set(target, new target());
    return target;
}