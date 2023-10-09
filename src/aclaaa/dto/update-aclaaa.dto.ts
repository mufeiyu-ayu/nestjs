import { PartialType } from '@nestjs/swagger';
import { CreateAclaaaDto } from './create-aclaaa.dto';

export class UpdateAclaaaDto extends PartialType(CreateAclaaaDto) {}
