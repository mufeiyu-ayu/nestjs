import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AclbbbService } from './aclbbb.service';
import { CreateAclbbbDto } from './dto/create-aclbbb.dto';
import { UpdateAclbbbDto } from './dto/update-aclbbb.dto';
@Controller('aclbbb')
export class AclbbbController {
  constructor(private readonly aclbbbService: AclbbbService) {}

  @Post()
  create(@Body() createAclbbbDto: CreateAclbbbDto) {
    return this.aclbbbService.create(createAclbbbDto);
  }

  @Get()
  findAll() {
    return this.aclbbbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aclbbbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAclbbbDto: UpdateAclbbbDto) {
    return this.aclbbbService.update(+id, updateAclbbbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aclbbbService.remove(+id);
  }
}
