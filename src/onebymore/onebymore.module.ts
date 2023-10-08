import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './entities/Department.entity';
import { Employee } from './entities/Employee.entity';
import { OnebymoreController } from './onebymore.controller';
import { OnebymoreService } from './onebymore.service';
@Module({
  imports: [TypeOrmModule.forFeature([Department, Employee])],
  controllers: [OnebymoreController],
  providers: [OnebymoreService],
})
export class OnebymoreModule {}
