import { Test, TestingModule } from '@nestjs/testing';
import { GloUserController } from './glo-user.controller';
import { GloUserService } from './glo-user.service';

describe('GloUserController', () => {
  let controller: GloUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GloUserController],
      providers: [GloUserService],
    }).compile();

    controller = module.get<GloUserController>(GloUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
