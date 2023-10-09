import { Test, TestingModule } from '@nestjs/testing';
import { AclbbbController } from './aclbbb.controller';
import { AclbbbService } from './aclbbb.service';

describe('AclbbbController', () => {
  let controller: AclbbbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AclbbbController],
      providers: [AclbbbService],
    }).compile();

    controller = module.get<AclbbbController>(AclbbbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
