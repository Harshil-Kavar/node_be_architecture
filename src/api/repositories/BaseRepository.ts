import { Document, Model, FilterQuery, UpdateQuery } from 'mongoose';
import { Logger, LoggerInterface } from '../../decorators/Logger';

export abstract class BaseRepository<T extends Document> {
    protected model: Model<T>;
    protected log: LoggerInterface;

    constructor(model: Model<T>) {
        this.model = model;
        this.log = new (Logger as any)(__filename);
    }

    public async findAll(filter: FilterQuery<T> = {}): Promise<T[]> {
        return this.model.find(filter);
    }

    public async findById(id: string): Promise<T | null> {
        return this.model.findById(id);
    }

    public async findOne(filter: FilterQuery<T>): Promise<T | null> {
        return this.model.findOne(filter);
    }

    public async create(data: Partial<T>): Promise<T> {
        const document = new this.model(data);
        return document.save();
    }

    public async update(id: string, data: UpdateQuery<T>): Promise<T | null> {
        return this.model.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    }

    public async delete(id: string): Promise<boolean> {
        const result = await this.model.findByIdAndDelete(id);
        return !!result;
    }

    public async count(filter: FilterQuery<T> = {}): Promise<number> {
        return this.model.countDocuments(filter);
    }

    public async exists(filter: FilterQuery<T>): Promise<boolean> {
        const count = await this.model.countDocuments(filter).limit(1);
        return count > 0;
    }
}
