import { PartialType } from '@nestjs/mapped-types';
import { CreateLearnControllerDto } from './create-learn-controller.dto';

export class UpdateLearnControllerDto extends PartialType(CreateLearnControllerDto) {}
