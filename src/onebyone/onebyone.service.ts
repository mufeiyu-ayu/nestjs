import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IdCard } from './entities/IdCard.entry';
import { User } from './entities/onebyone.entity';
@Injectable()
export class OnebyoneService {
  @InjectRepository(User) private readonly userRepository: Repository<User>;
  @InjectRepository(IdCard)
  private readonly idCardRepository: Repository<IdCard>;

  async addPerson() {
    const user = new User();
    user.firstName = 'ayu';
    user.lastName = 'cat';
    user.age = 18;

    const idCard = new IdCard();
    idCard.cardName = '1234567890';
    idCard.user = user;

    // await this.userRepository.save(user);
    await this.idCardRepository.save(idCard);
    await console.log('添加成功1');
  }
  async find() {
    const idCard = new IdCard();
    idCard.cardName = '1234567890';

    let res = await this.idCardRepository.find({
      where: { id: 1 },
      relations: ['user'],
    });
    return res;
  }
}
