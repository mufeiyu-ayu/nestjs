import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './onebyone.entity';
@Entity({
  name: 'id_card',
})
export class IdCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    comment: '身份证号',
  })
  cardName: string;

  @JoinColumn()
  @OneToOne((type) => User, {
    // cascade告诉数据库,当增删改查IdCard时,是否级联增删改查User
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;
}
