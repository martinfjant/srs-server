import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Card } from './card.entity';
import { CardService } from './card.service';

import { Int, Arg } from 'type-graphql';
import { CardInput } from './card.input';
import { CardEditInput } from './cardEdit.input';

@Resolver(of => Card)
export class CardResolver {
  constructor(private readonly cardService: CardService) {}
  @Query(() => [Card])
  async cards(): Promise<Card[]> {
    return await this.cardService.findAll({});
  }
  @Query(() => Card)
  async card(@Args({ name: 'id', type: () => Int }) id: number): Promise<Card> {
    return await this.cardService.findOne(id);
  }
  @Mutation(() => Card)
  async addCard(@Args('cardData') cardData: CardInput) {
    return await this.cardService.add(cardData);
  }
  @Mutation(() => Card)
  async editCard(
    @Args('id') id: number,
    @Args('cardData') cardData: CardEditInput,
  ) {
    return await this.cardService.edit(id, cardData);
  }
  @Mutation(() => Card)
  async deleteCard(@Args('id') id: number) {
    return await this.cardService.delete(id);
  }
}
