import Email from "../../shared/domain/email";
import { Either } from "../../shared/util/either";
import Employee from "../domain/entity/employee";
import EmployeeRepository from "../domain/port/employeeRepository";
import RegisterEmployeeUseCase from "../domain/usecase/registerEmployeeUseCase";

type RegisterEmployeeRequest = {
  name: string;
  email: string;
  birthday: Date;
};

export default class RegisterEmployeeService {
  constructor(readonly employeeRepository: EmployeeRepository) {}

  execute(request: RegisterEmployeeRequest): Either<Error, string> {
    const { name, email, birthday } = request;
    // here you will validate the request with Yup, JOY, JsonSchema, or any other schema validator and return a correspondent Either

    const employee = new Employee(name, new Email(email), birthday);

    const registerEmployeeUseCase = new RegisterEmployeeUseCase(
      this.employeeRepository
    );
    return registerEmployeeUseCase.execute(employee);
  }
}
