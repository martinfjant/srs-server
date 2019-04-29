import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Auth {
  @Field()
  token: string;
}
