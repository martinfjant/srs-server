import { Card } from 'src/card/card.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    createdDate: Date;
    cards: Card[];
}
