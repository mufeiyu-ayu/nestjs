import { Test, TestingModule } from '@nestjs/testing';
import { OnebymoreService } from './onebymore.service';

describe('OnebymoreService', () => {
  let service: OnebymoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnebymoreService],
    }).compile();

    service = module.get<OnebymoreService>(OnebymoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
