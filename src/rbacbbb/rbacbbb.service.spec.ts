import { Test, TestingModule } from '@nestjs/testing';
import { RbacbbbService } from './rbacbbb.service';

describe('RbacbbbService', () => {
  let service: RbacbbbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RbacbbbService],
    }).compile();

    service = module.get<RbacbbbService>(RbacbbbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
