import { HttpException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { RBAC_Role } from '../rbac-user/entities/Role.entity';
const whiteList = ['/rbac/login', '/login/register', '/404'];
declare module 'express' {
  interface Request {
    /**
     * type {user} 用户信息
     */
    user: {
      username: string;
      roles: RBAC_Role[];
    };
  }
}
export const havingToking = (req: Request, jwtService: JwtService): boolean => {
  let url = req.url;
  if (!whiteList.includes(url)) {
    // 未携带token
    const authorization = req.header('authorization') || '';
    const bearer = authorization.split(' ');
    if (!bearer || bearer.length < 2) {
      throw new HttpException('未携带token', 401);
    }
    const token = bearer[1];

    try {
      const info = jwtService.verify(token); // 这里已经在做验证token是否正确的操作了

      req.user = info.user;
      return true;
    } catch (e) {
      throw new HttpException('token错误', 401);
    }
  }
  return true;
};
