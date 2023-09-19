import { Test, TestingModule } from '@nestjs/testing';
import { LearnProvidersController } from './learn-providers.controller';
import { LearnProvidersService } from './learn-providers.service';

describe('LearnProvidersController', () => {
  let controller: LearnProvidersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LearnProvidersController],
      providers: [LearnProvidersService],
    }).compile();

    controller = module.get<LearnProvidersController>(LearnProvidersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
