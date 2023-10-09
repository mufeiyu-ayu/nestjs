import { Test, TestingModule } from '@nestjs/testing';
import { RbacaaaService } from './rbacaaa.service';

describe('RbacaaaService', () => {
  let service: RbacaaaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RbacaaaService],
    }).compile();

    service = module.get<RbacaaaService>(RbacaaaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
