import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RequirePermission } from '../custom/custom.decorator';
import { CreateRbacbbbDto } from './dto/create-rbacbbb.dto';
import { UpdateRbacbbbDto } from './dto/update-rbacbbb.dto';
import { RbacbbbService } from './rbacbbb.service';

@Controller('rbacbbb')
export class RbacbbbController {
  constructor(private readonly rbacbbbService: RbacbbbService) {}

  @Post()
  create(@Body() createRbacbbbDto: CreateRbacbbbDto) {
    return this.rbacbbbService.create(createRbacbbbDto);
  }

  @Get()
  @RequirePermission('查询 bbb')
  findAll() {
    return this.rbacbbbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rbacbbbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRbacbbbDto: UpdateRbacbbbDto) {
    return this.rbacbbbService.update(+id, updateRbacbbbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rbacbbbService.remove(+id);
  }
}
