import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response, NextFunction } from 'express';
import * as cors from 'cors';
import { join } from 'path';
import { Response as response } from './common/response';
import { HttpFilter } from './common/filter';
// 设置白名单，只有跳转cat的才能正常跳转，其余一律返回指定send
const whiteList = ['/cat'];
function MiddleWareAll(req: Request, res: Response, next: NextFunction) {
  if (whiteList.includes(req.originalUrl)) {
    next();
  } else {
    res.send('小黑子露出黑脚了');
  }
}
import * as session from 'express-session';
// 静态资源访问
import { NestExpressApplication } from '@nestjs/platform-express';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, 'images'), {
    prefix: '/ayu',
  });
  app.use(
    session({
      secret: 'ayu',
      rolling: true,
      name: 'ayu.sid',
      cookie: { maxAge: 1000000 },
    })
  );
  app.useGlobalFilters(new HttpFilter()); // 异常拦截器
  app.useGlobalInterceptors(new response()); // 响应拦截器
  // app.use(cors); // 第三方解决跨域的中间件
  // app.use(MiddleWareAll); // 使用全局中间件
  await app.listen(3000);
}
bootstrap();
