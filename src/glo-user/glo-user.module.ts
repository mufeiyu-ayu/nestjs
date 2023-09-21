import { Global, Module } from '@nestjs/common';
import { GloUserService } from './glo-user.service';
import { GloUserController } from './glo-user.controller';

@Global() // 让gloUser成为全局模块
@Module({
  controllers: [GloUserController],
  providers: [GloUserService],
  exports: [GloUserService],
})
export class GloUserModule {}
