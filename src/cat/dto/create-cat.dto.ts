import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty({ message: '姓名不能为空' }) // 验证是否为空
  @IsString({ message: '参数类型错误' }) // 验证是否为字符串
  name: string;

  @IsString({ message: 'age参数需为数字类型' }) // 验证是否为字符串
  age: string;
  @IsEmail({}, { message: '邮箱格式不正确' }) // 验证是否为字符串
  email: string;
}
