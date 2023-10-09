import { Module } from '@nestjs/common';
import { AclbbbService } from './aclbbb.service';
import { AclbbbController } from './aclbbb.controller';

@Module({
  controllers: [AclbbbController],
  providers: [AclbbbService],
})
export class AclbbbModule {}
