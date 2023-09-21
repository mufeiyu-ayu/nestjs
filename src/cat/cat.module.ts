import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { logger } from 'src/middeware';
@Module({
  controllers: [CatController],
  providers: [CatService],
  exports: [CatService], // 导出此模块成为共享模块
})
export class CatModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 中间件拦截cat
    // consumer.apply(logger).forRoutes({
    //   path: 'cat',
    //   method: RequestMethod.GET,
    // });
  }
}
