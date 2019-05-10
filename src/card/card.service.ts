import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './card.entity';
import { CardInput } from './card.input';
import { CardEditInput } from './cardEdit.input';
@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}

  async findAll(object: object): Promise<Card[]> {
    return await this.cardRepository.find(object);
  }
  async findOne(id: number): Promise<Card> {
    return await this.cardRepository.findOne(id);
  }
  async add(cardData: CardInput): Promise<Card> {
    const card = new Card();
    const newCard = Object.assign({}, card, cardData);
    return await this.cardRepository.save(newCard);
  }
  async edit(id: any, cardData: CardEditInput): Promise<Card> {
    const card = await this.cardRepository.findOne({ id });
    const cardObject = new Card();
    const editCard = Object.assign({}, cardObject, cardData); // I was mad, ok?
    this.cardRepository.merge(card, editCard);
    return await this.cardRepository.save(card);
  }

  async delete(id: number): Promise<boolean> {
    await this.cardRepository.delete(id);
    return true;
  }
}
