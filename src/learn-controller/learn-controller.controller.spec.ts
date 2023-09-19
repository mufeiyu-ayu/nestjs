import { Test, TestingModule } from '@nestjs/testing';
import { LearnControllerController } from './learn-controller.controller';
import { LearnControllerService } from './learn-controller.service';

describe('LearnControllerController', () => {
  let controller: LearnControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LearnControllerController],
      providers: [LearnControllerService],
    }).compile();

    controller = module.get<LearnControllerController>(LearnControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
