import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { CatService } from './cat/cat.service';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catService: CatService,
    @Inject('Config') private readonly config: any
  ) {}

  @Get()
  getHello() {
    console.log(this.config);
    return this.catService.cat() + JSON.stringify(this.config);
  }
}
