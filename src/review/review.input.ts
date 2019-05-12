import { InputType, Field, ID } from 'type-graphql';
import { Review } from './review.entity';
import { Card } from 'src/card/card.entity';

@InputType({
  description: 'Values for review as number and id of related card',
})
export class ReviewInput implements Partial<Review> {
  @Field()
  readonly answer: number;

  @Field(type => ID)
  readonly card: Card;
}
