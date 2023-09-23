import {
  Controller,
  Get,
  Req,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { LearnControllerService } from './learn-controller.service';
import { CreateLearnControllerDto } from './dto/create-learn-controller.dto';
import { UpdateLearnControllerDto } from './dto/update-learn-controller.dto';
import { Request } from 'express';
import { ApiQuery } from '@nestjs/swagger';
@Controller('learnController')
export class LearnControllerController {
  constructor(
    private readonly learnControllerService: LearnControllerService
  ) {}
  @Get('breed') // GET=> http://localhost:3000/learnController/breed
  @ApiQuery({ name: 'name', description: 'name字段描述' }) // get修饰符
  findAll() {
    const arr = [1, 2, 3, 4];
    return {
      message: arr,
      code: 200,
    };
  }
  @Get('test') //
  // @Query(key?: string)	req.query / req.query[key]  req.query / req.query[key]
  findList(req, res): any {
    // console.log('query: ', query);
    console.log(req);

    return 11;
  }
  @Post('create')
  create(@Body() createPersonDto) {
    return `自定义数据: ${JSON.stringify(createPersonDto)}`;
  }
}
