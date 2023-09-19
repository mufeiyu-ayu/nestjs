import { Test, TestingModule } from '@nestjs/testing';
import { LearnControllerService } from './learn-controller.service';

describe('LearnControllerService', () => {
  let service: LearnControllerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LearnControllerService],
    }).compile();

    service = module.get<LearnControllerService>(LearnControllerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
