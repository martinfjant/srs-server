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
    const review = await this.reviewRepository
      .createQueryBuilder('review')
      .where('review.id = :id', { id: cardId })
      .orderBy('createdDate', 'DESC')
      .limit(1)
      .getOne();
    return review;
  }

  async reviews(cardId: number): Promise<Review[]> {
    const reviews = await this.reviewRepository
      .createQueryBuilder('review')
      .where('review.id = :id', { id: cardId })
      .orderBy('createdDate', 'DESC')
      .getMany();
    return reviews;
  }

  async add(id: number, reviewData: ReviewInput): Promise<Review> {
    const next = sm2(
      (await this.last(id)).answer,
      (await this.reviews(id)).map(rev => rev.answer),
    );

    const now: Date = new Date(Date.now());
    const scheduled: Date = new Date(now.setDate(now.getDate() + next));
    const card = this.cardService.findOne(id);
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
