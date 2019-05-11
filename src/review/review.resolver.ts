import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Review } from './review.entity';
import { ReviewService } from './review.service';
import { CardService } from 'src/card/card.service';
import { ReviewInput } from './review.intut';
import { GqlAuthGuard } from 'src/auth/gql-auth-guard';
import { UseGuards } from '@nestjs/common';

@Resolver(of => Review)
export class ReviewResolver {
  constructor(
    private readonly reviewService: ReviewService,
    private readonly cardService: CardService,
  ) {}
  @Query(() => [Review])
  @UseGuards(GqlAuthGuard)
  async reviews(@Args('id') id: number): Promise<Review[]> {
    return await this.reviewService.reviews(id);
  }
  @Mutation(() => Review)
  @UseGuards(GqlAuthGuard)
  async addReview(
    @Args('id') id: number,
    @Args('reviewData') reviewData: ReviewInput,
  ): Promise<Review> {
    return await this.reviewService.add(id, reviewData);
  }
  @Mutation(() => Review)
  @UseGuards(GqlAuthGuard)
  async deleteReview(@Args('id') id: number): Promise<any> {
    return await this.reviewService.delete(id);
  }
}
