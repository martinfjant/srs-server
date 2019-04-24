import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserInput } from './user.input';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    add(userData: UserInput): Promise<User>;
    edit(id: number, userData: UserInput): Promise<User>;
    delete(id: number): Promise<any>;
}
