import { HttpException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as crypto from 'crypto';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Login } from './entities/login.entity';
function md5(str) {
  const hash = crypto.createHash('md5');
  hash.update(str);
  return hash.digest('hex');
}
@Injectable()
export class LoginService {
  private logger = new Logger();
  @InjectRepository(Login) private readonly loginRepository: Repository<Login>;
  async register(user: RegisterDto) {
    const foundUser = await this.loginRepository.findOneBy({
      username: user.username,
    });
    if (foundUser) {
      throw new HttpException('用户已存在', 200);
    }
    const newUser = new Login();
    newUser.username = user.username;
    newUser.password = md5(user.password);
    try {
      await this.loginRepository.save(newUser);
      return '注册成功';
    } catch (e) {
      this.logger.error(e, LoginService);
      return '注册失败';
    }
  }

  async login(user: LoginDto) {
    const foundUser = await this.loginRepository.findOneBy({
      username: user.username,
    });
    if (!foundUser) {
      throw new HttpException('用户名不存在', 200);
    }
    if (foundUser.password !== md5(user.password)) {
      throw new HttpException('密码错误', 200);
    }
    return foundUser;
  }
}
