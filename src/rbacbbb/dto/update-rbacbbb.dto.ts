import { PartialType } from '@nestjs/swagger';
import { CreateRbacbbbDto } from './create-rbacbbb.dto';

export class UpdateRbacbbbDto extends PartialType(CreateRbacbbbDto) {}
