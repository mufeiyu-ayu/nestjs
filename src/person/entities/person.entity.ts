import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({})
  name: string;

  @Column()
  age: number;
  @Column()
  imgAddress: string;
}
