import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateRbacaaaDto } from './dto/create-rbacaaa.dto';
import { UpdateRbacaaaDto } from './dto/update-rbacaaa.dto';
import { RbacaaaService } from './rbacaaa.service';

import { RequirePermission } from '../custom/custom.decorator';
@Controller('rbacaaa')
export class RbacaaaController {
  constructor(private readonly rbacaaaService: RbacaaaService) {}

  @Post()
  create(@Body() createRbacaaaDto: CreateRbacaaaDto) {
    return this.rbacaaaService.create(createRbacaaaDto);
  }

  @Get()
  @RequirePermission('查询 bbb')
  findAll() {
    return this.rbacaaaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rbacaaaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRbacaaaDto: UpdateRbacaaaDto) {
    return this.rbacaaaService.update(+id, updateRbacaaaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rbacaaaService.remove(+id);
  }
}
