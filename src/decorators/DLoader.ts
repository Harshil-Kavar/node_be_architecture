import { Container } from 'typedi';

export function DLoader(target: any): any {
    Container.set(target, new target());
    return target;
}