import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';
@Controller()
export class AppController {
  @Inject(AppService)
  private readonly appService: AppService;
  @Get('aaa')
  @UseGuards(LoginGuard)
  aaa() {
    return 'aaa';
  }

  @Get('bbb')
  @UseGuards(LoginGuard)
  bbb() {
    return 'bbb';
  }
}
