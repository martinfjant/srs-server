import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './review.entity';
import { Repository } from 'typeorm';
import { sm2 } from './algorithm';
import { ResolveWithTtlOptions } from 'dns';
import { CardService } from 'src/card/card.service';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
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

  async add(id: number, reviewData: Review): Promise<void> {
    const next = sm2(
      (await this.last(id)).answer,
      (await this.reviews(id)).map(rev => rev.answer),
    );

    const now: Date = new Date(Date.now());
    const scheduled = now.setDate(now.getDate() + next);
    const card = this.cardService.findOne(id);
    const newRev = {
      answer: reviewData.answer,
      card,
    };
  }
}
