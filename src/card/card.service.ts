import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './card.entity';
import { CardInput } from './card.input';
import { CardEditInput } from './cardEdit.input';
import { UserService } from 'src/user/user.service';
import getToken from 'src/utils/getToken';
import { AuthService } from 'src/auth/auth.service';
@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  async findAll(object: object): Promise<Card[]> {
    return await this.cardRepository.find(object);
  }
  async findOne(id: number): Promise<Card> {
    return await this.cardRepository.findOne(id);
  }
  async add(cardData: CardInput, ctx): Promise<Card> {
    const token = getToken(ctx);
    const user = await this.authService.getUser(token);
    const card = new Card();
    cardData.user = user;
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

  async user(ctx): Promise<Card[]> {
    const token = getToken(ctx);
    const user = await this.authService.getUser(token);
    return await this.cardRepository.find({ user });
  }

  async scheduled(ctx): Promise<Card[]> {
    const token = getToken(ctx);
    const { id } = await this.authService.getUser(token);
    return await this.cardRepository
      .createQueryBuilder('card')
      .where('card."userId" = :id', { id })
      .andWhere('card."scheduled" < CURRENT_DATE')
      .getMany();
  }
}
