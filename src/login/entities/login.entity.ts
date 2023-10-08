import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Login {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
    comment: '用户名',
  })
  username: string;

  @Column({
    length: 50,
    comment: '密码',
  })
  password: string;
  @CreateDateColumn({
    comment: '创建时间', // 自动设置为当前时间
  })
  createTime: Date;

  @UpdateDateColumn({
    comment: '更新时间', // 自动设置更新当前时间
  })
  updateTime: Date;
}
