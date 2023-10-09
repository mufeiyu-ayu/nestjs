import { Test, TestingModule } from '@nestjs/testing';
import { RbacaaaController } from './rbacaaa.controller';
import { RbacaaaService } from './rbacaaa.service';

describe('RbacaaaController', () => {
  let controller: RbacaaaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RbacaaaController],
      providers: [RbacaaaService],
    }).compile();

    controller = module.get<RbacaaaController>(RbacaaaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
