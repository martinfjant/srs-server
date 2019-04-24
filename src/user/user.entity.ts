import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Card } from 'src/card/card.entity';

@ObjectType()
@Entity()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column({ length: 500 })
  name: string;

  @Field({ nullable: true })
  @Column({ length: 500 })
  email: string;

  @Column()
  password: string;

  @Field({ nullable: true })
  @CreateDateColumn()
  createdDate: Date;
  @Field(type => Card, { nullable: true })
  @OneToMany(type => Card, card => card.user, { onDelete: 'CASCADE' })
  cards: Card[];
}
