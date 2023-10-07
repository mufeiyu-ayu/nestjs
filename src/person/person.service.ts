import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OssService } from '../oss/oss.service';
import { Person } from './entities/person.entity';
@Injectable()
export class PersonService extends OssService {
  @InjectRepository(Person)
  private readonly personRepository: Repository<Person>;
  getPerson() {
    return this.personRepository.find();
  }
  async addPerson(person) {
    if (person.hasOwnProperty('id')) {
      // 我打算更新内容
      let res = await this.personRepository.findOneBy({
        imgAddress: person.imgAddress,
      });

      if (!res) {
        // 说明我更新了图片
        let { imgAddress } = await this.personRepository.findOneBy(person.id);
        // console.log(imgAddress);
        this.deleteImg(imgAddress);
      }
    }
    return this.personRepository.save(person);
  }
  async delete(id: number) {
    let { imgAddress } = await this.personRepository.findOneBy({ id });
    this.deleteImg(imgAddress);
    return this.personRepository.delete(id);
  }
}
