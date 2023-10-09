import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class RBAC_Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    length: 100,
    nullable: true,
  })
  desc: string;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;
}
