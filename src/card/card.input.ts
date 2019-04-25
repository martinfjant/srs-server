import { InputType, Field, ID } from 'type-graphql';
import { User } from 'src/user/user.entity';

@InputType()
export class CardInput {
  @Field(type => ID, { nullable: true })
  user?: User['id'];

  @Field({ nullable: true })
  front: string;

  @Field({ nullable: true })
  back: string;

  @Field({ nullable: true })
  scheduled?: Date;
}
