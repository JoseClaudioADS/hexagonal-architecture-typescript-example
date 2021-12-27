import { Either, Left, Right } from "../../../shared/util/either";
import Employee from "../entity/employee";
import EmployeeRepository from "../port/employeeRepository";

export default class RegisterEmployeeUseCase {
  constructor(readonly employeeRepository: EmployeeRepository) {}

  execute(employee: Employee): Either<Error, string> {
    const emailAlreadyUsed = this.checkEmailAlreadyUsed(employee.email.value);
    if (emailAlreadyUsed) return Left(Error("E-mail already used"));
    const id = this.employeeRepository.save(employee);
    return Right(id);
  }

  private checkEmailAlreadyUsed(email: string): boolean {
    return this.employeeRepository.countByEmail(email) > 0;
  }
}
