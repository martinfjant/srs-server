import { Repository } from 'typeorm';
import { Card } from './card.entity';
import { CardInput } from './card.input';
export declare class CardService {
    private readonly cardRepository;
    constructor(cardRepository: Repository<Card>);
    findAll(object: object): Promise<Card[]>;
    findOne(id: number): Promise<Card>;
    add(cardData: CardInput): Promise<Card>;
    edit(id: number, cardData: CardInput): Promise<Card>;
}
