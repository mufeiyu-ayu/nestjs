import { Module } from '@nestjs/common';
import { RbacbbbService } from './rbacbbb.service';
import { RbacbbbController } from './rbacbbb.controller';

@Module({
  controllers: [RbacbbbController],
  providers: [RbacbbbService],
})
export class RbacbbbModule {}
