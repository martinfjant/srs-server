import { Resolver, Query } from '@nestjs/graphql';
import { Review } from './review.entity';
import { ReviewService } from './review.service';

@Resolver(of => Review)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}
  @Query(() => [Review])
  async Reviews(): Promise<Review[]> {
    return await this.reviewService.findAll();
  }
}
