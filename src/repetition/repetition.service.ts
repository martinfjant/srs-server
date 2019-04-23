import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repetition } from './repetition.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RepetitionService {
  constructor(
    @InjectRepository(Repetition)
    private readonly repetitionRepository: Repository<Repetition>,
  ) {}

  async findAll(): Promise<Repetition[]> {
    return await this.repetitionRepository.find();
  }
}
