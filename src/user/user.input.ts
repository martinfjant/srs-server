import { InputType, Field } from 'type-graphql';
import { User } from './user.entity';

@InputType()
export class UserInput implements Partial<User> {
  @Field({ nullable: true })
  readonly name: string;

  @Field({ nullable: true })
  readonly email: string;

  @Field()
  readonly password: string;
}
