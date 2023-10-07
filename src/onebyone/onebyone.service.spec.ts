import { Test, TestingModule } from '@nestjs/testing';
import { OnebyoneService } from './onebyone.service';

describe('OnebyoneService', () => {
  let service: OnebyoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnebyoneService],
    }).compile();

    service = module.get<OnebyoneService>(OnebyoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
