import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { GloUserService } from 'src/glo-user/glo-user.service';
@Controller('cat')
export class CatController {
  constructor(
    private readonly catService: CatService,
    private readonly gloUserService: GloUserService
  ) {}
  @Get()
  findAll() {
    // 在cat模块中使用glo
    return this.gloUserService.findAll();
  }
  @Post()
  async create(@Body() CreatecatDto: CreateCatDto) {
    console.log(CreatecatDto);
    return `received: ${JSON.stringify(CreatecatDto)}`;
  }
}
