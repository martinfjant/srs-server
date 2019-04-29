import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { User } from 'src/user/user.entity';
import { Review } from 'src/review/review.entity';
import { ObjectType, Field, ID } from 'type-graphql';
import { Deck } from './deck.entity';

@ObjectType()
@Entity()
export class Card {
  @Field(id => ID)
  @PrimaryGeneratedColumn()
  id: number;
  @Field()
  @Column({ length: 500 })
  front: string;
  @Field()
  @Column({ length: 500 })
  back: string;
  @Field()
  @Column({ default: () => 'NOW()' })
  scheduled: Date;
  @Field()
  @Column({ default: 2 })
  efactor: number;
  @Field()
  @Column({ default: false })
  learned: boolean;
  @Field()
  @CreateDateColumn({ type: 'timestamptz' })
  created: Date;
  @Field()
  @UpdateDateColumn({ type: 'timestamptz' })
  updated: Date;

  @Field(type => User)
  @ManyToOne(type => User, user => user.cards)
  user: User;
  @Field(type => Review)
  @OneToMany(type => Review, review => review.card)
  reviews: Review[];
  @ManyToMany(type => Deck)
  decks: Deck[];
}
