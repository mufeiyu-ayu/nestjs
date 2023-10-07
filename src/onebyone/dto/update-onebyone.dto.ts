import { PartialType } from '@nestjs/swagger';
import { CreateOnebyoneDto } from './create-onebyone.dto';

export class UpdateOnebyoneDto extends PartialType(CreateOnebyoneDto) {}
