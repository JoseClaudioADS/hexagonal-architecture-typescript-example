import { generateId } from "../../../shared/domain/entity";
import Employee from "../../domain/entity/employee";
import EmployeeRepository from "../../domain/port/employeeRepository";
import EmployeeModel from "./employeeModel";

export default class EmployeeRepositoryArray implements EmployeeRepository {
  private employees: EmployeeModel[] = [];

  countByEmail(email: string): number {
    return this.employees.filter(
      (employee) => employee.email === email.toLowerCase()
    ).length;
  }
  save(employee: Employee): string {
    const { name, email, birthday } = employee;
    const id = generateId();
    const employeeModel = new EmployeeModel(id, name, email.value, birthday);
    this.employees.push(employeeModel);
    return employeeModel.id;
  }
}
