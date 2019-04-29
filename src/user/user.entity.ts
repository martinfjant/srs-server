import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Card } from 'src/card/card.entity';
import * as argon2 from 'argon2';

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

  @Column()
  role: 'user' | 'admin';

  @Field({ nullable: true })
  @CreateDateColumn()
  createdDate: Date;
  @Field(type => Card, { nullable: true })
  @OneToMany(type => Card, card => card.user, { onDelete: 'CASCADE' })
  cards: Card[];

  @BeforeInsert()
  async encypt() {
    if (this.password) {
      const hashedPassword = await argon2.hash(this.password);
      this.password = hashedPassword;
    }
  }
}
