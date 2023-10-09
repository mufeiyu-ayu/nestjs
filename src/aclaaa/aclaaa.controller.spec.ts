import { Test, TestingModule } from '@nestjs/testing';
import { AclaaaController } from './aclaaa.controller';
import { AclaaaService } from './aclaaa.service';

describe('AclaaaController', () => {
  let controller: AclaaaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AclaaaController],
      providers: [AclaaaService],
    }).compile();

    controller = module.get<AclaaaController>(AclaaaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
