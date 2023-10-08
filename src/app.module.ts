import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesGuard } from './common/auth.guard';
import { LoginModule } from './login/login.module';
import { OnebyoneModule } from './onebyone/onebyone.module';
import { OssModule } from './oss/oss.module';
import { PersonModule } from './person/person.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', //数据库类型
      username: 'root', //账号
      password: 'xiangjiayi53822', //密码
      host: 'localhost', //host
      port: 3306, //
      database: 'typeorm_test', //库名
      // entities: [__dirname + '/**/*.entity{.ts,.js}'], //实体文件
      synchronize: true, //synchronize字段代表是否自动将实体类同步到数据库
      // logging: true,
      retryDelay: 500, //重试连接数据库间隔
      retryAttempts: 10, //重试连接数据库的次数
      autoLoadEntities: true, //如果为true,将自动加载实体 forFeature()方法注册的每个实体都将自动添加到配置对象的实体数组中
      poolSize: 10, //连接池大小
      connectorPackage: 'mysql2', //连接器包
      extra: {
        authPlugin: 'sha256_password',
      },
    }),
    JwtModule.register({
      global: true,
      secret: 'ayu',
      signOptions: {
        expiresIn: '7d',
      },
    }),
    PersonModule,
    OssModule,
    OnebyoneModule,
    LoginModule,
  ],
  controllers: [AppController], // 模块中定义的必须实例化的控制器集
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ], // 将由Nest注入器实例化并且至少可以在此模块之间共享的提供程序
})
export class AppModule {}
