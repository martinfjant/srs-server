import { InputType, Field, ID } from 'type-graphql';
import { User } from 'src/user/user.entity';
import { Card } from './card.entity';

@InputType({
  description:
    'Data for creation and edit of card, owner, front, back. Scheduling only for creation',
})
export class CardInput implements Partial<Card> {
  @Field(type => ID, { nullable: true })
  user?: User;

  @Field({ nullable: true })
  front: string;

  @Field({ nullable: true })
  back: string;

  @Field({ nullable: true })
  scheduled?: Date;
}
