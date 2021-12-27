import Employee from "../entity/employee";

export default interface EmployeeRepository {
  countByEmail(email: string): number;
  save(employee: Employee): string;
}
