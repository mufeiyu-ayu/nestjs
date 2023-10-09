import { Module } from '@nestjs/common';
import { RbacaaaController } from './rbacaaa.controller';
import { RbacaaaService } from './rbacaaa.service';

@Module({
  controllers: [RbacaaaController],
  providers: [RbacaaaService],
})
export class RbacaaaModule {}
