import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Card } from 'src/card/card.entity';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType({ description: 'The reviews associated to a card' })
@Entity()
export class Review {
  @Field(id => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  answer: number;

  @CreateDateColumn({ type: 'timestamptz' })
  created: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updated: Date;

  @Field(type => Card)
  @ManyToOne(type => Card, card => card.id)
  card: Card;
}
