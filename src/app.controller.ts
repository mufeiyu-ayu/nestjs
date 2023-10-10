import { Controller, Get, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
@Controller()
export class AppController {
  @Inject(AppService)
  private readonly appService: AppService;
  @Inject(ConfigService) private readonly configService: ConfigService;
  @Get('aaa')
  aaa() {
    return 'aaa';
  }

  @Get('bbb')
  bbb() {
    return {
      // aaa: this.configService.get('aaa'),
      // bbb: this.configService.get('bbb'),
      db: this.configService.get('db'),
    };
  }
}
