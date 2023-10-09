import { Test, TestingModule } from '@nestjs/testing';
import { AclController } from './acl.controller';
import { AclService } from './acl.service';

describe('AclController', () => {
  let controller: AclController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AclController],
      providers: [AclService],
    }).compile();

    controller = module.get<AclController>(AclController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
