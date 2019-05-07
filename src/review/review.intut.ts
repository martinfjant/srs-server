import { InputType, Field } from 'type-graphql';

@InputType()
export class ReviewInput {
  @Field()
  readonly answer: number;

  @Field()
  readonly card: number;
}
