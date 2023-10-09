import { Test, TestingModule } from '@nestjs/testing';
import { RbacUserService } from './rbac-user.service';

describe('RbacUserService', () => {
  let service: RbacUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RbacUserService],
    }).compile();

    service = module.get<RbacUserService>(RbacUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
