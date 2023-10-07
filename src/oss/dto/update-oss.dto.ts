import { PartialType } from '@nestjs/swagger';
import { CreateOssDto } from './create-oss.dto';

export class UpdateOssDto extends PartialType(CreateOssDto) {}
