import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as session from 'express-session';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'ayu',
      rolling: true,
      name: 'ayu.sid',
      cookie: { maxAge: 1000000 },
    })
  );
  await app.listen(3000);
}
bootstrap();
