import { Test, TestingModule } from '@nestjs/testing';
import { AclaaaService } from './aclaaa.service';

describe('AclaaaService', () => {
  let service: AclaaaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AclaaaService],
    }).compile();

    service = module.get<AclaaaService>(AclaaaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
