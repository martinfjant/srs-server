import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repetition } from './repetition.entity';
import { RepetitionController } from './repetition.controller';
import { RepetitionService } from './repetition.service';
import { RepetitionResolver } from './repetition.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Repetition])],
  controllers: [RepetitionController],
  providers: [RepetitionService, RepetitionResolver],
  exports: [RepetitionService],
})
export class RepetitionModule {}
