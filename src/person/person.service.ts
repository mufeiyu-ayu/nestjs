import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';
@Injectable()
export class PersonService {
  @InjectRepository(Person)
  private readonly personRepository: Repository<Person>;
  getPerson() {
    return this.personRepository.find();
  }
  async addPerson(person) {
    return this.personRepository.save(person);
  }
  delete(id: number) {
    return this.personRepository.delete(id);
  }
}
