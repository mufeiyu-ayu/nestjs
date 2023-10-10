import {
  Body,
  Controller,
  Get,
  HttpException,
  Inject,
  Post,
  Query,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserLoginDto } from './dto/UserLoginDto.dto';
import { RbacUserService } from './rbac-user.service';
@Controller('rbac')
export class RbacUserController {
  @Inject(JwtService) private jwtService: JwtService;
  constructor(private readonly rbacUserService: RbacUserService) {}
  @Get()
  async initData() {
    await this.rbacUserService.initData();
    return 'done';
  }

  @Post('login')
  async login(@Body() loginUser: UserLoginDto) {
    const user = await this.rbacUserService.login(loginUser);

    const token = this.jwtService.sign(
      {
        user: {
          username: user.username,
          roles: user.roles,
        },
      },
      { expiresIn: '30m' }
    );
    const refresh_token = this.jwtService.sign(
      {
        userId: user.id,
      },
      { expiresIn: '7d' }
    );
    return {
      token,
      refresh_token,
    };
  }

  @Get('refresh')
  async refresh(@Query('refresh_token') refreshToken: string) {
    try {
      const data = this.jwtService.verify(refreshToken);
      //
      const user = await this.rbacUserService.findOne(data.userId);
      const access_token = this.jwtService.sign(
        {
          user: {
            username: user.username,
            roles: user.roles,
          },
        },
        { expiresIn: '30m' }
      );
      const refresh_token = this.jwtService.sign(
        { userId: user.id },
        { expiresIn: '7d' }
      );
      return {
        access_token,
        refresh_token,
      };
    } catch (e) {
      throw new HttpException('token已失效', 401);
    }
  }
}
