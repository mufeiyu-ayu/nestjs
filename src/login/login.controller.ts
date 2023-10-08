import { Body, Controller, Inject, Post, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { LoginService } from './login.service';
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Inject(JwtService) jwtService: JwtService;
  @Post('login')
  async login(
    @Body() user: LoginDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const foundUser = await this.loginService.login(user);
    if (foundUser) {
      const token = await this.jwtService.signAsync({
        user: {
          id: foundUser.id,
          username: foundUser.username,
        },
      });

      res.setHeader('token', token);
      return 'login success';
    } else {
      return 'login fail';
    }
  }
  @Post('register')
  async register(@Body() user: RegisterDto) {
    return await this.loginService.register(user);
  }
}
