import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Card } from 'src/card/card.entity';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType({ description: 'The repetitions associated to a card' })
@Entity()
export class Repetition {
  @Field(id => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  answer: number;
  @Field(type => Card)
  @ManyToOne(type => Card, card => card.id)
  card: Card;
}
