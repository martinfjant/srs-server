import { User } from 'src/user/user.entity';
import { Repetition } from 'src/repetition/repetition.entity';
import { Deck } from './deck.entity';
export declare class Card {
    id: number;
    front: string;
    back: string;
    scheduled: Date;
    efactor: number;
    learned: boolean;
    createdDate: Date;
    updatedDate: Date;
    user: User;
    repetitions: Repetition[];
    decks: Deck[];
}
