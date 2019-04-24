import { UserService } from './user.service';
import { User } from './user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUser(): Promise<User[]>;
    getUserById(id: any): Promise<User>;
}
