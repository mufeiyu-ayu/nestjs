import { PartialType } from '@nestjs/swagger';
import { CreateOnebymoreDto } from './create-onebymore.dto';

export class UpdateOnebymoreDto extends PartialType(CreateOnebymoreDto) {}
