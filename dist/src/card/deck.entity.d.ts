import { Card } from './card.entity';
import { Collection } from './collection.entity';
export declare class Deck {
    id: number;
    name: string;
    cards: Card[];
    collections: Collection[];
}
