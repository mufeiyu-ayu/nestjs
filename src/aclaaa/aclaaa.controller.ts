import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { PermissionGuard } from '../acl/permission.guard';
import { AclaaaService } from './aclaaa.service';
import { CreateAclaaaDto } from './dto/create-aclaaa.dto';
import { UpdateAclaaaDto } from './dto/update-aclaaa.dto';
@Controller('aclaaa')
export class AclaaaController {
  constructor(private readonly aclaaaService: AclaaaService) {}

  @Post()
  @UseGuards(PermissionGuard)
  create(@Body() createAclaaaDto: CreateAclaaaDto) {
    return this.aclaaaService.create(createAclaaaDto);
  }

  @Get()
  @UseGuards(PermissionGuard)
  @SetMetadata('permission', 'query_aaa')
  findAll() {
    return this.aclaaaService.findAll();
  }

  @Get(':id')
  @UseGuards(PermissionGuard)
  findOne(@Param('id') id: string) {
    return this.aclaaaService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(PermissionGuard)
  update(@Param('id') id: string, @Body() updateAclaaaDto: UpdateAclaaaDto) {
    return this.aclaaaService.update(+id, updateAclaaaDto);
  }

  @Delete(':id')
  @UseGuards(PermissionGuard)
  remove(@Param('id') id: string) {
    return this.aclaaaService.remove(+id);
  }
}
