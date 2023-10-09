import { PartialType } from '@nestjs/swagger';
import { CreateRbacaaaDto } from './create-rbacaaa.dto';

export class UpdateRbacaaaDto extends PartialType(CreateRbacaaaDto) {}
