import Employee from "../../domain/entity/employee";
import EmployeeRepository from "../../domain/port/employeeRepository";

export default class EmployeeRepositoryDb implements EmployeeRepository {
  constructor(readonly dbConnection: any) {}

  countByEmail(email: string): number {
    throw Error("Method not implemented");
  }
  save(employee: Employee): string {
    throw Error("Method not implemented");
  }
}
