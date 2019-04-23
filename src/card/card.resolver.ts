import { Resolver, Query } from '@nestjs/graphql';
import { Card } from './card.entity';
import { CardService } from './card.service';

@Resolver(of => Card)
export class CardResolver {
  constructor(private readonly cardService: CardService) {}
  @Query(() => [Card])
  async Cards(): Promise<Card[]> {
    const test = await this.cardService.findAll();
    return test;
  }
}
