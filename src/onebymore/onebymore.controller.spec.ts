import { Test, TestingModule } from '@nestjs/testing';
import { OnebymoreController } from './onebymore.controller';
import { OnebymoreService } from './onebymore.service';

describe('OnebymoreController', () => {
  let controller: OnebymoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnebymoreController],
      providers: [OnebymoreService],
    }).compile();

    controller = module.get<OnebymoreController>(OnebymoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
