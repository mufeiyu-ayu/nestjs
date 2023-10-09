import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AclController } from './acl.controller';
import { AclService } from './acl.service';
import { Permission } from './entities/Permission.entity';
import { AclUser } from './entities/acl.entity';
import { PermissionGuard } from './permission.guard';
@Module({
  imports: [TypeOrmModule.forFeature([AclUser, Permission])],
  controllers: [AclController],
  providers: [AclService, PermissionGuard],
  exports: [AclService, PermissionGuard],
})
export class AclModule {}
