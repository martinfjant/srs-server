import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Deck } from './deck.entity';

@Entity()
export class Collection {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @ManyToMany(type => Deck)
  @JoinTable()
  decks: Deck[];
}
