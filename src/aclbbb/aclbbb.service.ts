import { Injectable } from '@nestjs/common';
import { CreateAclbbbDto } from './dto/create-aclbbb.dto';
import { UpdateAclbbbDto } from './dto/update-aclbbb.dto';

@Injectable()
export class AclbbbService {
  create(createAclbbbDto: CreateAclbbbDto) {
    return 'This action adds a new aclbbb';
  }

  findAll() {
    return `This action returns all aclbbb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aclbbb`;
  }

  update(id: number, updateAclbbbDto: UpdateAclbbbDto) {
    return `This action updates a #${id} aclbbb`;
  }

  remove(id: number) {
    return `This action removes a #${id} aclbbb`;
  }
}
