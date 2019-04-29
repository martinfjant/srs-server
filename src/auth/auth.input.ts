import { InputType, Field } from 'type-graphql';

@InputType()
export class AuthInput {
  @Field()
  readonly email: string;

  @Field()
  readonly password: string;
}
