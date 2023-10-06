import { IsNotEmpty } from 'class-validator';
export class CreatePersonDto {
  @IsNotEmpty({ message: '姓名不能为空' }) // 验证是否为空
  name: string;
  @IsNotEmpty({ message: '年龄不能为空' }) // 验证是否为空
  age: number;
}
