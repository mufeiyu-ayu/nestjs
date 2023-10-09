import { IsNotEmpty, Length } from 'class-validator';
export class LoginUserDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(1, 50, { message: '用户名长度为1到50个字符' })
  username: string;

  @IsNotEmpty({ message: '密码不能为空' })
  @Length(1, 50, { message: '用户名长度为1到50个字符' })
  password: string;
}
