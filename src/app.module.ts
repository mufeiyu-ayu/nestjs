import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { LearnControllerModule } from './learn-controller/learn-controller.module';
import { LearnProvidersModule } from './learn-providers/learn-providers.module';
import { CatModule } from './cat/cat.module';
import { GloUserModule } from './glo-user/glo-user.module';
import { ConfigMoudle } from './config/config.module';
import { UploadModule } from './upload/upload.module';
@Module({
  controllers: [AppController], // 模块中定义的必须实例化的控制器集
  providers: [AppService], // 将由Nest注入器实例化并且至少可以在此模块之间共享的提供程序
  imports: [
    LearnControllerModule,
    LearnProvidersModule,
    CatModule,
    GloUserModule,
    ConfigMoudle.forRoot({ path: '/ayu' }),
    UploadModule,
    PersonModule,
  ],
})
export class AppModule {}
