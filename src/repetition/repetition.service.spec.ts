import { Test, TestingModule } from '@nestjs/testing';
import { RepetitionService } from './repetition.service';

describe('RepetitionService', () => {
  let service: RepetitionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepetitionService],
    }).compile();

    service = module.get<RepetitionService>(RepetitionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
