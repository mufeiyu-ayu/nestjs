import { Injectable } from '@nestjs/common';
import { CreateAclaaaDto } from './dto/create-aclaaa.dto';
import { UpdateAclaaaDto } from './dto/update-aclaaa.dto';

@Injectable()
export class AclaaaService {
  create(createAclaaaDto: CreateAclaaaDto) {
    return 'This action adds a new aclaaa';
  }

  findAll() {
    return `This action returns all aclaaa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aclaaa`;
  }

  update(id: number, updateAclaaaDto: UpdateAclaaaDto) {
    return `This action updates a #${id} aclaaa`;
  }

  remove(id: number) {
    return `This action removes a #${id} aclaaa`;
  }
}
