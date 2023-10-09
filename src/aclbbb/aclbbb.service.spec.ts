import { Test, TestingModule } from '@nestjs/testing';
import { AclbbbService } from './aclbbb.service';

describe('AclbbbService', () => {
  let service: AclbbbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AclbbbService],
    }).compile();

    service = module.get<AclbbbService>(AclbbbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
