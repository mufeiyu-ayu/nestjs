import { Test, TestingModule } from '@nestjs/testing';
import { RbacbbbController } from './rbacbbb.controller';
import { RbacbbbService } from './rbacbbb.service';

describe('RbacbbbController', () => {
  let controller: RbacbbbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RbacbbbController],
      providers: [RbacbbbService],
    }).compile();

    controller = module.get<RbacbbbController>(RbacbbbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
