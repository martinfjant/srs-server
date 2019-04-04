import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  front: string;

  @Column()
  back: string;

  @Column()
  scheduled: Date;

  @Column()
  efactor: number;

  @Column()
  learned: boolean;

  @ManyToOne(type => User, user => user.cards)
  user: User;
}
