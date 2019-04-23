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
import { Repetition } from 'src/repetition/repetition.entity';
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
  @Column()
  scheduled: Date;
  @Field()
  @Column()
  efactor: number;
  @Field()
  @Column()
  learned: boolean;
  @Field()
  @CreateDateColumn()
  createdDate: Date;
  @Field()
  @UpdateDateColumn()
  updatedDate: Date;

  @Field(type => User)
  @ManyToOne(type => User, user => user.cards)
  user: User;
  @Field(type => Repetition)
  @OneToMany(type => Repetition, repetition => repetition.card)
  repetitions: Repetition[];
  @ManyToMany(type => Deck)
  decks: Deck[];
}
