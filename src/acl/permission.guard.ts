import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { AclService } from './acl.service';
@Injectable()
export class PermissionGuard implements CanActivate {
  @Inject(AclService) private aclService: AclService;
  @Inject(Reflector) private reflector: Reflector;
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const user = (request.session as any).user;
    if (!user) {
      throw new HttpException('请先登录', 401);
    }
    const foundUser = await this.aclService.findByUsername(user.username);
    console.log(foundUser, 'foundUser');
    const permission = this.reflector.get('permission', context.getHandler());
    console.log(permission, 'permission');
    if (foundUser.permissions.some((item) => item.name === permission)) {
      return true;
    } else {
      throw new HttpException('无权限访问该接口', 401);
    }
  }
}
