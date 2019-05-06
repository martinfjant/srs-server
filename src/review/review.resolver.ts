import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import { Review } from './review.entity';
import { ReviewService } from './review.service';
import { CardService } from 'src/card/card.service';
import { Card } from 'src/card/card.entity';
import { ReviewInput } from './review.intut';

@Resolver(of => Review)
export class ReviewResolver {
  constructor(
    private readonly reviewService: ReviewService,
    private readonly cardService: CardService,
  ) {}
  @Query(() => [Review])
  async reviews(@Args('id') id: number): Promise<Review[]> {
    return await this.reviewService.reviews(id);
  }
  @Mutation(() => Review)
  async addReview(
    @Args('id') id: number,
    @Args('reviewData') reviewData: ReviewInput,
  ): Promise<Review> {
    return await this.reviewService.add(id, reviewData);
  }
  @Mutation(() => Review)
  async deleteReview(@Args('id') id: number): Promise<any> {
    return await this.reviewService.delete(id);
  }

  // @ResolveProperty('card')
  // async card(@Parent() review: Review): Promise<Card> {
  //   const { id } = review;
  //   return await this.cardService.findOne(id);
  // }
}
