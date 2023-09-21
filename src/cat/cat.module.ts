import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';

@Module({
  controllers: [CatController],
  providers: [CatService],
  exports: [CatService], // 导出此模块成为共享模块
})
export class CatModule {}
