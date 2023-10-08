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
    // do something
  }
}
