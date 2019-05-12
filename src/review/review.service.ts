import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './review.entity';
import { Repository } from 'typeorm';
import { sm2 } from './algorithm';
import { CardService } from 'src/card/card.service';
import { ReviewInput } from './review.intut';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
    @Inject(forwardRef(() => CardService))
    private readonly cardService: CardService,
  ) {}

  /* FIND */
  async findAll(): Promise<Review[]> {
    return await this.reviewRepository.find();
  }

  async last(cardId: number): Promise<Review> {
    console.log('Access review');
    const review = await this.reviewRepository
      .createQueryBuilder('review')
      .where('review.id = :id', { id: cardId })
      .orderBy('review.created', 'DESC')
      .getOne();
    console.log(review); /*returnerar undefined*/
    return review;
  }

  async reviews(cardId: number): Promise<Review[]> {
    console.log('Access reviews');
    const reviews = await this.reviewRepository
      .createQueryBuilder('review')
      .where('review.id = :id', { id: cardId })
      .orderBy('review.created', 'DESC')
      .getMany();
    console.log(reviews); /*returnerar undefined*/
    return reviews;
  }

  async add(id: number, reviewData: ReviewInput): Promise<Review> {
    try {
      console.log('try');
      console.log(await this.last(id));
    } catch (e) {
      console.log(e);
    }
    const last = await this.last(id);
    const all = await this.reviews(id);
    const array = all.map(rev => rev.answer);
    const next = sm2(last.answer, array);
    const now: Date = new Date(Date.now());
    const scheduled: Date = new Date(now.setDate(now.getDate() + next));
    const card = await this.cardService.findOne(id);
    const newRevData = {
      answer: reviewData.answer,
      card,
    };
    const newCard = Object.assign({}, card, { scheduled });
    await this.cardService.edit(id, newCard);
    const newRev = new Review();
    const saveRev = Object.assign({}, newRev, newRevData);
    return await this.reviewRepository.save(saveRev);
  }

  async delete(id: number) {
    return await this.reviewRepository.delete(id);
  }
}
