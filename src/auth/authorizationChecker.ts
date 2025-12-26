import { Action } from 'routing-controllers';
import { AuthService } from './AuthService';

export function authorizationChecker(): (action: Action, roles: any[]) => Promise<boolean> | boolean {
    return async function innerAuthorizationChecker(
        action: Action,
        roles: string[]
    ): Promise<boolean> {
        return AuthService.authorizationChecker(action.request, roles);
    };
}
