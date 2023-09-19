import { PartialType } from '@nestjs/mapped-types';
import { CreateLearnProviderDto } from './create-learn-provider.dto';

export class UpdateLearnProviderDto extends PartialType(CreateLearnProviderDto) {}
