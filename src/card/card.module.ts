import { Module, forwardRef } from '@nestjs/common';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './card.entity';
import { CardResolver } from './card.resolver';
import { UserModule } from 'src/user/user.module';
import { ReviewModule } from 'src/review/review.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Card]),
    forwardRef(() => UserModule),
    forwardRef(() => ReviewModule),
  ],
  controllers: [CardController],
  providers: [CardService, CardResolver],
  exports: [CardService],
})
export class CardModule {}
