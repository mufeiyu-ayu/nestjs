import { Controller, Get } from '@nestjs/common';
import { OnebyoneService } from './onebyone.service';

@Controller('onebyone')
export class OnebyoneController {
  constructor(private readonly onebyoneService: OnebyoneService) {}

  @Get()
  addPerson() {
    this.onebyoneService.addPerson();
  }
  @Get('/find')
  getFind() {
    return this.onebyoneService.find();
  }
}
