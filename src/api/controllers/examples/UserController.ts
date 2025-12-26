import {
    JsonController,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    Res,
    HttpCode
} from 'routing-controllers';
import { Response } from 'express';
import { Service } from 'typedi';
import { BaseController } from '../BaseController';
import { UserService } from '../../services/examples/UserService';
import { CreateUserDto, UpdateUserDto } from '../../validators/examples/UserDto';
import { Logger, LoggerInterface } from '../../../decorators/Logger';

@JsonController('/users')
@Service()
export class UserController extends BaseController {
    constructor(
        private userService: UserService,
        @Logger(__filename) private log: LoggerInterface
    ) {
        super();
    }

    @Get()
    public async getUsers(@Res() res: Response): Promise<Response> {
        try {
            const users = await this.userService.findAll();
            return this.sendSuccess(res, users, 'Users retrieved successfully');
        } catch (error) {
            this.log.error('Error getting users:', error);
            return this.sendError(res, 'Failed to retrieve users');
        }
    }

    @Get('/:id')
    public async getUser(@Param('id') id: string, @Res() res: Response): Promise<Response> {
        try {
            const user = await this.userService.findById(id);
            if (!user) {
                return this.sendNotFound(res, 'User not found');
            }
            return this.sendSuccess(res, user, 'User retrieved successfully');
        } catch (error) {
            this.log.error('Error getting user:', error);
            return this.sendError(res, 'Failed to retrieve user');
        }
    }

    @Post()
    @HttpCode(201)
    public async createUser(@Body() userData: CreateUserDto, @Res() res: Response): Promise<Response> {
        try {
            // Check if user already exists
            const existingUser = await this.userService.findByEmail(userData.email);
            if (existingUser) {
                return this.sendBadRequest(res, 'User with this email already exists');
            }

            const user = await this.userService.create(userData);
            return this.sendCreated(res, user, 'User created successfully');
        } catch (error) {
            this.log.error('Error creating user:', error);
            return this.sendError(res, 'Failed to create user');
        }
    }

    @Put('/:id')
    public async updateUser(
        @Param('id') id: string,
        @Body() userData: UpdateUserDto,
        @Res() res: Response
    ): Promise<Response> {
        try {
            const user = await this.userService.update(id, userData);
            if (!user) {
                return this.sendNotFound(res, 'User not found');
            }
            return this.sendSuccess(res, user, 'User updated successfully');
        } catch (error) {
            this.log.error('Error updating user:', error);
            return this.sendError(res, 'Failed to update user');
        }
    }

    @Delete('/:id')
    public async deleteUser(@Param('id') id: string, @Res() res: Response): Promise<Response> {
        try {
            const deleted = await this.userService.delete(id);
            if (!deleted) {
                return this.sendNotFound(res, 'User not found');
            }
            return this.sendSuccess(res, undefined, 'User deleted successfully');
        } catch (error) {
            this.log.error('Error deleting user:', error);
            return this.sendError(res, 'Failed to delete user');
        }
    }
}
