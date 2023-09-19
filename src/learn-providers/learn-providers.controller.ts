import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { LearnProvidersService } from './learn-providers.service';
import { CreateLearnProviderDto } from './dto/create-learn-provider.dto';
import { UpdateLearnProviderDto } from './dto/update-learn-provider.dto';

@Controller('learnProviders')
export class LearnProvidersController {
  constructor(
    private readonly learnProvidersService: LearnProvidersService,
    @Inject('Test') private readonly shop: string[],
    @Inject('CCC') private readonly ccc: string
  ) {}
  @Get()
  findAll() {
    // return this.shop;
    return this.ccc;
  }
}
