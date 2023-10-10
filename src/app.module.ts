import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AclModule } from './acl/acl.module';
import { AclaaaModule } from './aclaaa/aclaaa.module';
import { AclbbbModule } from './aclbbb/aclbbb.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesGuard } from './common/auth.guard';
import { LoginModule } from './login/login.module';
import { OnebymoreModule } from './onebymore/onebymore.module';
import { OnebyoneModule } from './onebyone/onebyone.module';
import { OssModule } from './oss/oss.module';
import { PermissionGuard } from './permission.guard';
import { PersonModule } from './person/person.module';
import { RbacUserModule } from './rbac-user/rbac-user.module';
import { RbacaaaModule } from './rbacaaa/rbacaaa.module';
import { RbacbbbModule } from './rbacbbb/rbacbbb.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', //数据库类型
      username: 'root', //账号
      password: 'xiangjiayi53822', //密码
      host: 'localhost', //host
      port: 3306, //
      database: 'rbac_test', //库名
      // entities: [User, Role, Permission], //实体文件
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
        expiresIn: '30m',
      },
    }),
    PersonModule,
    OssModule,
    OnebyoneModule,
    LoginModule,
    OnebymoreModule,
    AclModule,
    AclaaaModule,
    AclbbbModule,
    RbacUserModule,
    RbacaaaModule,
    RbacbbbModule,
  ],
  controllers: [AppController], // 模块中定义的必须实例化的控制器集
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_GUARD,
      useClass: PermissionGuard,
    },
  ], // 将由Nest注入器实例化并且至少可以在此模块之间共享的提供程序
})
export class AppModule {}
