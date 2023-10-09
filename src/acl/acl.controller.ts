import { Body, Controller, Get, Post, Session } from '@nestjs/common';
import { AclService } from './acl.service';
import { LoginUserDto } from './dto/LoginUserDto.dto';
@Controller('acl')
export class AclController {
  constructor(private readonly aclService: AclService) {}
  @Get('init')
  async initData() {
    await this.aclService.initData();
  }
  @Post('login')
  async login(
    @Body() loginUser: LoginUserDto,
    @Session() session: Record<string, any>
  ) {
    const user = await this.aclService.login(loginUser);
    session.user = {
      username: user.username,
    };
    return 'success';
  }
}
