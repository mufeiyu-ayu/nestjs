import {
  Controller,
  Get,
  Req,
  Res,
  Post,
  Body,
  Patch,
  Session,
  Param,
  Delete,
  Query,
  Headers,
  HttpCode,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Request as ExRequest } from 'express';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}
  @Get('code')
  getCode(@Req() req, @Res() res, @Session() session) {
    this.personService.createCode(req, res, session);
  }
  // 请求对象 通过指示 Nest 通过将装饰器添加到处理程序的签名中来注入它来访问请求对象。@Query = req.query
  // findAll(@Query() query) {
  //   console.log(query);
  //   return {
  //     code: 200,
  //     message: query.name,
  //   };
  // }
  // post请求
  @Post('create')
  createUser(@Body() Body, @Session() session) {
    console.log('session: ', session.code);
    console.log('Body: ', Body);
    if (session.code.toLocaleLowerCase() === Body?.code?.toLocaleLowerCase()) {
      return { message: '验证码正确', code: 200 };
    } else {
      return { message: '验证码错误', code: 200 };
    }
  }
  // @Body('name')通过注入参数的形式直接要求返回body.name
  // create(@Body('name') body) {
  //   console.log(body);
  //   return {
  //     code: 200,
  //     message: body,
  //   };
  // }
  // 动态参数匹配
  @HttpCode(500) // 指定状态码
  @Get(':id')
  finedId(@Param('id') param, @Headers() headers) {
    console.log(param);
    return {
      code: 200,
    };
  }
}
