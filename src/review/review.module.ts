import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './review.entity';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { ReviewResolver } from './review.resolver';
import { CardModule } from 'src/card/card.module';
import { CardService } from 'src/card/card.service';

@Module({
  imports: [TypeOrmModule.forFeature([Review]), CardModule],
  controllers: [ReviewController],
  providers: [ReviewService, ReviewResolver, CardService],
  exports: [ReviewService],
})
export class ReviewModule {}
