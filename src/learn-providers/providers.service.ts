import { Injectable } from '@nestjs/common';

@Injectable()
export class providersService {
  getHello() {
    return '工厂模式注入数据';
  }
}
//
