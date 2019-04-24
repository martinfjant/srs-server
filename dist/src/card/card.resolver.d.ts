import { Card } from './card.entity';
import { CardService } from './card.service';
import { CardInput } from './card.input';
export declare class CardResolver {
    private readonly cardService;
    constructor(cardService: CardService);
    cards(): Promise<Card[]>;
    card(id: number): Promise<Card>;
    addCard(cardData: CardInput): Promise<Card>;
}
