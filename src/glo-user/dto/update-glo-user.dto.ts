import { PartialType } from '@nestjs/mapped-types';
import { CreateGloUserDto } from './create-glo-user.dto';

export class UpdateGloUserDto extends PartialType(CreateGloUserDto) {}
