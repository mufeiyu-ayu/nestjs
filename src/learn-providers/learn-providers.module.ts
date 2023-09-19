import { Module } from '@nestjs/common';
import { LearnProvidersService } from './learn-providers.service';
import { LearnProvidersController } from './learn-providers.controller';
import { providersService } from './providers.service';
@Module({
  controllers: [LearnProvidersController],
  providers: [
    LearnProvidersService,
    providersService,
    {
      provide: 'Test',
      useValue: ['ayu', 'jiajia'], // 自定义值
    },
    {
      // 工厂模式
      provide: 'CCC',
      inject: [providersService],
      useFactory(providersService: providersService) {
        return 22222;
      },
    },
  ],
})
export class LearnProvidersModule {}
