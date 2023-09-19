import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { LearnControllerModule } from './learn-controller/learn-controller.module';
import { LearnProvidersModule } from './learn-providers/learn-providers.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PersonModule, LearnControllerModule, LearnProvidersModule],
})
export class AppModule {}
