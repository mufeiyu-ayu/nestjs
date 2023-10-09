import { Injectable } from '@nestjs/common';
import { CreateRbacbbbDto } from './dto/create-rbacbbb.dto';
import { UpdateRbacbbbDto } from './dto/update-rbacbbb.dto';

@Injectable()
export class RbacbbbService {
  create(createRbacbbbDto: CreateRbacbbbDto) {
    return 'This action adds a new rbacbbb';
  }

  findAll() {
    return `This action returns all rbacbbb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rbacbbb`;
  }

  update(id: number, updateRbacbbbDto: UpdateRbacbbbDto) {
    return `This action updates a #${id} rbacbbb`;
  }

  remove(id: number) {
    return `This action removes a #${id} rbacbbb`;
  }
}
