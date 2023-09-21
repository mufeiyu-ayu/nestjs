import { Injectable } from '@nestjs/common';
import { CreateGloUserDto } from './dto/create-glo-user.dto';
import { UpdateGloUserDto } from './dto/update-glo-user.dto';

@Injectable()
export class GloUserService {
  create(createGloUserDto: CreateGloUserDto) {
    return 'This action adds a new gloUser';
  }

  findAll() {
    return `This action returns all gloUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gloUser`;
  }

  update(id: number, updateGloUserDto: UpdateGloUserDto) {
    return `This action updates a #${id} gloUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} gloUser`;
  }
}
