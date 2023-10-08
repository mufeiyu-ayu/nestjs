import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  @Inject(AppService)
  private readonly appService: AppService;
  @Get('aaa')
  aaa() {
    return 'aaa';
  }

  @Get('bbb')
  bbb() {
    return 'bbb';
  }
}
