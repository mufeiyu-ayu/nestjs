import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('role', context.getHandler());
    // 指派的守卫验证

    // roles => ['admin']
    if (!roles) {
      return true;
    }
    const request: Request = context.switchToHttp().getRequest();
    // 验证是否存在token

    //request.headers.authorization  => Bearer 121218218219219219281
    const token = request.headers.authorization;
    console.log(token, roles);
    return matchRoles(roles, token);
    // 如果守卫验证失败我们可以加上自定义的错误信息
    // throw new UnauthorizedException('无权限访问');
  }
}
function matchRoles(roles: string[], token: string) {
  // verify
  // do something
  return true;
}
