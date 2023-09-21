import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GloUserService } from './glo-user.service';
import { CreateGloUserDto } from './dto/create-glo-user.dto';
import { UpdateGloUserDto } from './dto/update-glo-user.dto';

@Controller('glo-user')
export class GloUserController {
  constructor(private readonly gloUserService: GloUserService) {}

  @Post()
  create(@Body() createGloUserDto: CreateGloUserDto) {
    return this.gloUserService.create(createGloUserDto);
  }

  @Get()
  findAll() {
    return this.gloUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gloUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGloUserDto: UpdateGloUserDto) {
    return this.gloUserService.update(+id, updateGloUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gloUserService.remove(+id);
  }
}
