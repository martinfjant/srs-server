import { Test, TestingModule } from '@nestjs/testing';
import { RepetitionController } from './repetition.controller';

describe('Repetition Controller', () => {
  let controller: RepetitionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepetitionController],
    }).compile();

    controller = module.get<RepetitionController>(RepetitionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
