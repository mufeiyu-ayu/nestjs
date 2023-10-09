import { Module } from '@nestjs/common';
import { AclModule } from '../acl/acl.module';
import { AclaaaController } from './aclaaa.controller';
import { AclaaaService } from './aclaaa.service';
@Module({
  imports: [AclModule],
  controllers: [AclaaaController],
  providers: [AclaaaService],
})
export class AclaaaModule {}
