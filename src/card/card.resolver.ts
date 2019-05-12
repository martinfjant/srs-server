import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveProperty,
  Parent,
  Context,
} from '@nestjs/graphql';
import { Card } from './card.entity';
import { CardService } from './card.service';

import { Int } from 'type-graphql';
import { CardInput } from './card.input';
import { CardEditInput } from './cardEdit.input';
import { Review } from 'src/review/review.entity';
import { ReviewService } from 'src/review/review.service';
import { Inject, forwardRef, Req } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth-guard';
import { UseGuards } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import getToken from '../utils/getToken';

@Resolver(of => Card)
export class CardResolver {
  constructor(
    private readonly cardService: CardService,
    @Inject(forwardRef(() => ReviewService))
    private readonly reviewService: ReviewService,
  ) {}
  @Query(() => [Card])
  @UseGuards(GqlAuthGuard)
  async cards(@Context() ctx: any): Promise<Card[]> {
    return await this.cardService.user(ctx);
  }
  @Query(() => Card)
  @UseGuards(GqlAuthGuard)
  async card(@Args({ name: 'id', type: () => Int }) id: number): Promise<Card> {
    return await this.cardService.findOne(id);
  }
  @Query(() => [Card])
  @UseGuards(GqlAuthGuard)
  async due(@Context() ctx: any): Promise<Card[]> {
    return await this.cardService.scheduled(ctx);
  }
  @Mutation(() => Card)
  @UseGuards(GqlAuthGuard)
  async addCard(@Args('cardData') cardData: CardInput, @Context() ctx: any) {
    return await this.cardService.add(cardData, ctx);
  }
  @Mutation(() => Card)
  @UseGuards(GqlAuthGuard)
  async editCard(
    @Args('id') id: number,
    @Args('cardData') cardData: CardEditInput,
  ) {
    return await this.cardService.edit(id, cardData);
  }
  @Mutation(() => Card)
  @UseGuards(GqlAuthGuard)
  async deleteCard(@Args('id') id: number) {
    return await this.cardService.delete(id);
  }

  @ResolveProperty('reviews')
  async reviews(@Parent() card): Promise<Review[]> {
    const { id } = card;
    return await this.reviewService.reviews(id);
  }
}
