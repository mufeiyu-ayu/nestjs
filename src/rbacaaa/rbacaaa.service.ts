import { Injectable } from '@nestjs/common';
import { CreateRbacaaaDto } from './dto/create-rbacaaa.dto';
import { UpdateRbacaaaDto } from './dto/update-rbacaaa.dto';

@Injectable()
export class RbacaaaService {
  create(createRbacaaaDto: CreateRbacaaaDto) {
    return 'This action adds a new rbacaaa';
  }

  findAll() {
    return `This action returns all rbacaaa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rbacaaa`;
  }

  update(id: number, updateRbacaaaDto: UpdateRbacaaaDto) {
    return `This action updates a #${id} rbacaaa`;
  }

  remove(id: number) {
    return `This action removes a #${id} rbacaaa`;
  }
}
