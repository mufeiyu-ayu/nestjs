import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
