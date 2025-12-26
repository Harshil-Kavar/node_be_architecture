import { Service } from 'typedi';
import { User, IUser } from '../../models/examples/User';
import { Logger, LoggerInterface } from '../../../decorators/Logger';
import * as bcrypt from 'bcrypt';

@Service()
export class UserService {
    constructor(
        @Logger(__filename) private log: LoggerInterface
    ) {}

    public async findAll(): Promise<IUser[]> {
        this.log.info('Finding all users');
        return User.find({ isActive: true }).select('-password');
    }

    public async findById(id: string): Promise<IUser | null> {
        this.log.info('Finding user by id', { id });
        return User.findById(id).select('-password');
    }

    public async findByEmail(email: string): Promise<IUser | null> {
        this.log.info('Finding user by email', { email });
        return User.findOne({ email, isActive: true });
    }

    public async create(userData: Partial<IUser>): Promise<IUser> {
        this.log.info('Creating new user', { email: userData.email });

        if (userData.password) {
            userData.password = await bcrypt.hash(userData.password, 10);
        }

        const user = new User(userData);
        const savedUser = await user.save();

        return User.findById(savedUser._id).select('-password') as Promise<IUser>;
    }

    public async update(id: string, userData: Partial<IUser>): Promise<IUser | null> {
        this.log.info('Updating user', { id });

        if (userData.password) {
            userData.password = await bcrypt.hash(userData.password, 10);
        }

        return User.findByIdAndUpdate(
            id,
            userData,
            { new: true, runValidators: true }
        ).select('-password');
    }

    public async delete(id: string): Promise<boolean> {
        this.log.info('Soft deleting user', { id });
        const result = await User.findByIdAndUpdate(id, { isActive: false });
        return !!result;
    }

    public async validatePassword(email: string, password: string): Promise<IUser | null> {
        this.log.info('Validating user password', { email });
        const user = await User.findOne({ email, isActive: true });

        if (user && await bcrypt.compare(password, user.password)) {
            return User.findById(user._id).select('-password') as Promise<IUser>;
        }

        return null;
    }
}
