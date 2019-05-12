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

  public async last(cardId: number): Promise<Review> {
    const review = await this.reviewRepository
      .createQueryBuilder('review')
      .where('review."cardId" = :id', { id: cardId })
      .orderBy('review.created', 'DESC')
      .getOne();
    return review;
  }

  public async reviews(cardId: number): Promise<Review[]> {
    const reviews = await this.reviewRepository
      .createQueryBuilder('review')
      .where('review."cardId" = :id', { id: cardId })
      .orderBy('review.created', 'DESC')
      .getMany();
    return reviews;
  }

  public async add(id: number, reviewData: ReviewInput): Promise<any> {
    /* Resolve an array of reviews, so that we can map over them */
    const all = await this.reviews(id);
    /* Send last answer, and an array of all previous answers into sm2 */
    /* Returns amount of days until next review */
    const next = sm2((await this.last(id)).answer, all.map(rev => rev.answer));
    /* Create a date, that is actually an instance of the Date object */
    const now: Date = new Date(Date.now());
    /* Create a date that is next days after now */
    const scheduled: Date = new Date(now.setDate(now.getDate() + next));
    /* Get card for relation, create new review post to inser in DB */
    const card = await this.cardService.findOne(id);
    const newRevData = {
      answer: reviewData.answer,
      card,
    };
    /* Create new instance of card for updating scheduled property*/
    const newCard = Object.assign({}, card, { scheduled });
    /* Editt he card in Db */
    await this.cardService.edit(id, newCard);
    /* Create new review instance, smash in the previously created review */
    const newRev = new Review();
    const saveRev = Object.assign({}, newRev, newRevData);
    /*Save!*/
    const res = await this.reviewRepository.save(saveRev);
    return res;
  }

  async delete(id: number) {
    return await this.reviewRepository.delete(id);
  }
}
