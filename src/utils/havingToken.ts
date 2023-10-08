import { HttpException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
const whiteList = ['/login/login', '/login/register', '/404'];
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
      console.log(token, 444);
      (req as any).user = info.user;
      return true;
    } catch (e) {
      throw new HttpException('token错误', 401);
    }
  }
  return true;
};
