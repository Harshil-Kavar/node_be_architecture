import {
    JsonController,
    Post,
    Body,
    Res
} from 'routing-controllers';
import { Response } from 'express';
import { Service } from 'typedi';
import * as jwt from 'jsonwebtoken';
import { BaseController } from '../BaseController';
import { UserService } from '../../services/examples/UserService';
import { LoginDto } from '../../validators/examples/UserDto';
import { Logger, LoggerInterface } from '../../../decorators/Logger';
import { env } from '../../../env';

@JsonController('/auth')
@Service()
export class AuthController extends BaseController {
    constructor(
        private userService: UserService,
        @Logger(__filename) private log: LoggerInterface
    ) {
        super();
    }

    @Post('/login')
    public async login(@Body() loginData: LoginDto, @Res() res: Response): Promise<Response> {
        try {
            const user = await this.userService.validatePassword(loginData.email, loginData.password);

            if (!user) {
                return this.sendBadRequest(res, 'Invalid email or password');
            }

            const accessToken = jwt.sign(
                {
                    userId: user._id,
                    email: user.email
                },
                env.jwt.access_token_secret
            );

            const refreshToken = jwt.sign(
                {
                    userId: user._id,
                    email: user.email
                },
                env.jwt.refresh_token_secret
            );

            return this.sendSuccess(res, {
                user,
                accessToken,
                refreshToken
            }, 'Login successful');

        } catch (error) {
            this.log.error('Error during login:', error);
            return this.sendError(res, 'Login failed');
        }
    }

    @Post('/refresh')
    public async refreshToken(@Body() body: { refreshToken: string }, @Res() res: Response): Promise<Response> {
        try {
            const { refreshToken } = body;

            if (!refreshToken) {
                return this.sendBadRequest(res, 'Refresh token is required');
            }

            const decoded = jwt.verify(refreshToken, env.jwt.refresh_token_secret) as any;

            const newAccessToken = jwt.sign(
                {
                    userId: decoded.userId,
                    email: decoded.email
                },
                env.jwt.access_token_secret
            );

            return this.sendSuccess(res, {
                accessToken: newAccessToken
            }, 'Token refreshed successfully');

        } catch (error) {
            this.log.error('Error refreshing token:', error);
            return this.sendBadRequest(res, 'Invalid refresh token');
        }
    }
}
