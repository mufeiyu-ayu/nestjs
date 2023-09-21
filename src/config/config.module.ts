import { Module, Global, DynamicModule } from '@nestjs/common';

interface Options {
  path: string;
}

@Global()
@Module({})
// 动态模块主要是为了给模块传递参数，可以给模块添加一个静态方法用来接收参数
export class ConfigMoudle {
  static forRoot(options: Options): DynamicModule {
    return {
      module: ConfigMoudle,
      providers: [
        {
          provide: 'Config',
          useValue: { baseApi: '/api' + options.path },
        },
      ],
      exports: [
        {
          provide: 'Config',
          useValue: { baseApi: '/api' + options.path },
        },
      ],
    };
  }
}
