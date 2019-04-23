import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Card } from './card.entity';
import { Collection } from './collection.entity';

@Entity()
export class Deck {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @ManyToMany(type => Card)
  @JoinTable()
  cards: Card[];

  @ManyToMany(type => Collection)
  collections: Collection[];
}
