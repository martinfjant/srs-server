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
    const foo = Object.assign({}, card, cardData);
    return await this.cardRepository.save(foo);
  }
  async edit(id: any, cardData: CardEditInput): Promise<Card> {
    const card = await this.cardRepository.findOne({ id });
    /* Because there is, I presume, some odd bug that refuse .merge to take cardData as is,
      I've mashed it together whith a new Card instance, and it worked. However, this is ugly,
      and imho it should've worked anyway.... */
    const cardObject = new Card();
    const fuck = Object.assign({}, cardObject, cardData); // I was mad, ok?
    this.cardRepository.merge(card, fuck);
    return await this.cardRepository.save(card);
  }

  async delete(id: number): Promise<any> {
    return await this.cardRepository.delete(id);
  }
}
