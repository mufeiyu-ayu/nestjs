import { Test, TestingModule } from '@nestjs/testing';
import { GloUserService } from './glo-user.service';

describe('GloUserService', () => {
  let service: GloUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GloUserService],
    }).compile();

    service = module.get<GloUserService>(GloUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
