import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RBAC_Permission } from './Permission.entity';

@Entity()
export class RBAC_Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 20,
  })
  name: string;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;

  @ManyToMany(() => RBAC_Permission)
  @JoinTable({
    name: 'role_permission_relation',
  })
  permissions: RBAC_Permission[];
}
