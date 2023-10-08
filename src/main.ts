import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';

import { HttpExceptionFilter } from './common/filter';
import { TransformInterceptor } from './common/response';
// 静态资源访问
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as session from 'express-session';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  const options = new DocumentBuilder()
    .setTitle('ayu的接口文档')
    .setDescription('文档的描述信息')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api-docs', app, document);
  app.useGlobalFilters(new HttpExceptionFilter()); // 异常拦截器
  app.useGlobalInterceptors(new TransformInterceptor()); // 响应拦截器
  app.useGlobalPipes(new ValidationPipe()); // 全局管道

  app.use(
    session({
      secret: 'ayu',
      resave: false,
      saveUninitialized: false,
    })
  );
  await app.listen(3000);
}
bootstrap();
