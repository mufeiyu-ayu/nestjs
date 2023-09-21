// 创建一个依赖注入中间件
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
@Injectable()
export class logger implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // console.log('进入中间件');
    // res.send('使用中间件拦截');
    // next();
  }
}
