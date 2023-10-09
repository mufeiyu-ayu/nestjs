import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { RBAC_Permission as Permission } from './rbac-user/entities/Permission.entity';
import { RbacUserService } from './rbac-user/rbac-user.service';
@Injectable()
export class PermissionGuard implements CanActivate {
  @Inject(RbacUserService) private rbacUserService: RbacUserService;
  @Inject(Reflector) private reflector: Reflector;
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    if (!(request as any).user) {
      return true;
    }
    const roles = await this.rbacUserService.findRolesByIds(
      request.user.roles.map((item) => item.id)
    );
    const permissions: Permission[] = roles.reduce((total, current) => {
      total.push(...current.permissions);
      return total;
    }, []);
    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(
      'require-permission',
      [context.getClass(), context.getHandler()]
    );
    // 如果没有设置权限，则不需要验证，标准公共部分
    if (requiredPermissions) {
      for (let i = 0; i < requiredPermissions.length; i++) {
        const curPermission = requiredPermissions[i];
        const found = permissions.find((item) => item.name === curPermission);
        if (!found) {
          throw new HttpException('您没有访问该接口的权限', 401);
        }
        return true;
      }
    }

    return true;
  }
}
