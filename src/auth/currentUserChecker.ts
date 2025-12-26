import { Action } from 'routing-controllers';
import { env } from '../env';
import { AuthService } from './AuthService';

export function currentUserChecker(): (action: Action) => Promise<any | undefined> {
    return async function innerCurrentUserChecker(
        action: Action
    ): Promise<any | undefined> {
        try {
            let token = action.request.headers.authorization;
            const regex = `${env.jwt.name} `;
            token = token.replace(regex, '');
            return AuthService.validateTokenAndReturnPayload(
                token,
                action.request
            );
        } catch {
            return undefined;
        }
    };
}
