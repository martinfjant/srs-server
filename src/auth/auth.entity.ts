import { ObjectType, Field } from 'type-graphql';

@ObjectType({
  description:
    'Returns a JSON web token to be used as a bearer token to authorize secured routes and resovers',
})
export class Auth {
  @Field()
  token: string;
}
