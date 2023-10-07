import { Test, TestingModule } from '@nestjs/testing';
import { OnebyoneController } from './onebyone.controller';
import { OnebyoneService } from './onebyone.service';

describe('OnebyoneController', () => {
  let controller: OnebyoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnebyoneController],
      providers: [OnebyoneService],
    }).compile();

    controller = module.get<OnebyoneController>(OnebyoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
