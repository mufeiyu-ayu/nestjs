import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RBAC_Permission } from './entities/Permission.entity';
import { RBAC_Role } from './entities/Role.entity';
import { RBAC_User } from './entities/User.entity';
import { RbacUserController } from './rbac-user.controller';
import { RbacUserService } from './rbac-user.service';
@Module({
  imports: [TypeOrmModule.forFeature([RBAC_User, RBAC_Role, RBAC_Permission])],
  controllers: [RbacUserController],
  providers: [RbacUserService],
  exports: [RbacUserService],
})
export class RbacUserModule {}
