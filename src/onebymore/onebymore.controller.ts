import { Controller, Get } from '@nestjs/common';
import { OnebymoreService } from './onebymore.service';

@Controller('onebymore')
export class OnebymoreController {
  constructor(private readonly onebymoreService: OnebymoreService) {}
  @Get()
  addPerson() {
    this.onebymoreService.addPerson();
  }
  @Get('find')
  find() {
    return this.onebymoreService.find();
  }
}
