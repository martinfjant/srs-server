import { InputType, Field } from 'type-graphql';

@InputType()
export class UserInput {
  @Field({ nullable: true })
  readonly name: string;

  @Field({ nullable: true })
  readonly email: string;

  @Field()
  readonly password: string;
}
