import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class CardEditInput {
  @Field({ nullable: true })
  front?: string;

  @Field({ nullable: true })
  back?: string;

  @Field({ nullable: true })
  scheduled?: Date;
}
