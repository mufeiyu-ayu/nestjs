import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';
import { RolesGuard } from './common/auth.guard';
import { HttpExceptionFilter } from './common/filter';
import { TransformInterceptor } from './common/response';
// 静态资源访问
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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
  app.useGlobalGuards(new RolesGuard(new Reflector())); // 全局守卫
  await app.listen(3000);
}
bootstrap();
