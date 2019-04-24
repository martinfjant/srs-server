import { User } from './user.entity';
import { Card } from '../card/card.entity';
import { UserService } from './user.service';
import { CardService } from 'src/card/card.service';
import { UserInput } from './user.input';
export declare class UserResolver {
    private readonly userService;
    private readonly cardService;
    constructor(userService: UserService, cardService: CardService);
    user(id: number): Promise<User>;
    addUser(userData: UserInput): Promise<User>;
    editUser(userData: UserInput, id: number): Promise<User>;
    deleteUser(id: number): Promise<any>;
    cards(user: any): Promise<Card[]>;
}
