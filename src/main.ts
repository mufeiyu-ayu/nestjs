import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response, NextFunction } from 'express';
import * as cors from 'cors';
import { join } from 'path';
import { Response as response } from './common/response';
import { HttpFilter } from './common/filter';
import * as session from 'express-session';
import { ValidationPipe } from '@nestjs/common';
import { RolesGuard } from './common/auth.guard';

// 静态资源访问
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// 设置白名单，只有跳转cat的才能正常跳转，其余一律返回指定send
const whiteList = ['/cat'];
function MiddleWareAll(req: Request, res: Response, next: NextFunction) {
  if (whiteList.includes(req.originalUrl)) {
    next();
  } else {
    res.send('小黑子露出黑脚了');
  }
}
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const options = new DocumentBuilder()
    .setTitle('ayu的接口文档')
    .setDescription('文档的描述信息')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api-docs', app, document);

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
  app.useGlobalPipes(new ValidationPipe()); // 全局管道
  app.useGlobalGuards(new RolesGuard(new Reflector())); // 全局守卫
  // app.use(cors); // 第三方解决跨域的中间件
  // app.use(MiddleWareAll); // 使用全局中间件
  await app.listen(3000);
}
bootstrap();
