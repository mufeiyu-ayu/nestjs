import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
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

    const token = this.jwtService.sign({
      user: {
        username: user.username,
        roles: user.roles,
      },
    });

    return {
      token,
    };
  }
}
