import { Test, TestingModule } from '@nestjs/testing';
import { RbacUserController } from './rbac-user.controller';
import { RbacUserService } from './rbac-user.service';

describe('RbacUserController', () => {
  let controller: RbacUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RbacUserController],
      providers: [RbacUserService],
    }).compile();

    controller = module.get<RbacUserController>(RbacUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
