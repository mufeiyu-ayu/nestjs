import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './entities/Department.entity';
import { Employee } from './entities/Employee.entity';
@Injectable()
export class OnebymoreService {
  @InjectRepository(Department)
  private readonly departmentRepository: Repository<Department>;
  @InjectRepository(Employee)
  private readonly employeeRepository: Repository<Employee>;

  async addPerson() {
    const e1 = new Employee();
    e1.name = '张三';

    const e2 = new Employee();
    e2.name = '李四';

    const e3 = new Employee();
    e3.name = '王五';

    const d1 = new Department();
    d1.name = '技术部';
    d1.Employees = [e1, e2, e3];

    await this.departmentRepository.manager.save(d1);
  }
  async find() {
    const deps = await this.departmentRepository.manager.find(Department, {
      relations: ['Employees'],
    });
    return deps;
  }
}
