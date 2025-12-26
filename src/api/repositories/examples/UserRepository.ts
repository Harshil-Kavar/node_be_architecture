import { Service } from 'typedi';
import { BaseRepository } from '../BaseRepository';
import { User, IUser } from '../../models/examples/User';

@Service()
export class UserRepository extends BaseRepository<IUser> {
    constructor() {
        super(User);
    }

    public async findByEmail(email: string): Promise<IUser | null> {
        return this.findOne({ email, isActive: true });
    }

    public async findActiveUsers(): Promise<IUser[]> {
        return this.findAll({ isActive: true });
    }

    public async softDelete(id: string): Promise<boolean> {
        const result = await this.update(id, { isActive: false });
        return !!result;
    }
}
