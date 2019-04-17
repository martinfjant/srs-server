import { Resolver, Query } from '@nestjs/graphql';
import { Repetition } from './repetition.entity';
import { RepetitionService } from './repetition.service';

@Resolver(of => Repetition)
export class RepetitionResolver {
  constructor(private readonly repetitionService: RepetitionService) {}
  @Query(() => [Repetition])
  async repetitions(): Promise<Repetition[]> {
    return await this.repetitionService.findAll();
  }
}
