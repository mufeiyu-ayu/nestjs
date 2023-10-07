import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdCard } from './entities/IdCard.entry';
import { User } from './entities/onebyone.entity';
import { OnebyoneController } from './onebyone.controller';
import { OnebyoneService } from './onebyone.service';
@Module({
  imports: [TypeOrmModule.forFeature([User, IdCard])],
  controllers: [OnebyoneController],
  providers: [OnebyoneService],
})
export class OnebyoneModule {}
