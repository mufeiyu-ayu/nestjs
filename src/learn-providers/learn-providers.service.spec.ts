import { Test, TestingModule } from '@nestjs/testing';
import { LearnProvidersService } from './learn-providers.service';

describe('LearnProvidersService', () => {
  let service: LearnProvidersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LearnProvidersService],
    }).compile();

    service = module.get<LearnProvidersService>(LearnProvidersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
