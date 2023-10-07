import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { OssService } from 'src/oss/oss.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { PersonService } from './person.service';
@Controller('person')
export class PersonController {
  @Inject(OssService) private readonly ossService: OssService;
  constructor(private readonly personService: PersonService) {}
  @Get()
  getPerson() {
    return this.personService.getPerson();
  }
  @Post()
  addPerson(@Body() person: CreatePersonDto) {
    // this.ossService.add();
    return this.personService.addPerson(person);
  }
  @Post('delete/:id')
  delete(@Param('id') id: number) {
    return this.personService.delete(id);
  }
  @Get('signature')
  getOssSignature() {
    return this.ossService.getSignature();
  }
}
