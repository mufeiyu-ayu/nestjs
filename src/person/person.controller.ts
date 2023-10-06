import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { PersonService } from './person.service';
@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}
  @Get()
  getPerson() {
    return this.personService.getPerson();
  }
  @Post()
  addPerson(@Body() person: CreatePersonDto) {
    return this.personService.addPerson(person);
  }
  @Post('delete/:id')
  delete(@Param('id') id: number) {
    return this.personService.delete(id);
  }
}
