import { Module } from '@nestjs/common';
import { LearnControllerService } from './learn-controller.service';
import { LearnControllerController } from './learn-controller.controller';

@Module({
  controllers: [LearnControllerController],
  providers: [LearnControllerService],
})
export class LearnControllerModule {}
