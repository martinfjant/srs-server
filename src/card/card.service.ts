import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './card.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}

  async findAll(object: object): Promise<Card[]> {
    return await this.cardRepository.find(object);
  }

  async create(object: object): Promise<Card> {
    const card = new Card();
    const edit = Object.assign({}, card, object);
    return await this.cardRepository.save(edit);
  }
}
