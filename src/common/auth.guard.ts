import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { havingToking } from '../utils/havingToken';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  @Inject(JwtService)
  private jwtService: JwtService;
  canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();

    // token验证
    havingToking(request, this.jwtService);
    const roles = this.reflector.get<string[]>('role', context.getHandler());
    // 指派的守卫验证
    // roles => ['admin']
    if (!roles) {
      return true;
    }

    //request.headers.authorization  => Bearer 121218218219219219281
    const token = request.headers.authorization;

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
