import { PartialType } from '@nestjs/swagger';
import { CreateAclbbbDto } from './create-aclbbb.dto';

export class UpdateAclbbbDto extends PartialType(CreateAclbbbDto) {}
