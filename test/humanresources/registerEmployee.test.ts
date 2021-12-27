import RegisterEmployeeUseCase from "../../src/humanresources/domain/usecase/registerEmployeeUseCase";
import EmployeeRepository from "../../src/humanresources/domain/port/employeeRepository";
import EmployeeRepositoryArray from "../../src/humanresources/adapter/repository/employeeRepositoryArray";
import Employee from "../../src/humanresources/domain/entity/employee";
import Email from "../../src/shared/domain/email";
import { isLeft, isRight } from "../../src/shared/util/either";

describe("Register employee use case", () => {
  let employeeRepository: EmployeeRepository;
  let registerEmployeeUsecase: RegisterEmployeeUseCase;

  beforeEach(() => {
    // you can mock entire instance instead an adapter
    employeeRepository = new EmployeeRepositoryArray();
    registerEmployeeUsecase = new RegisterEmployeeUseCase(employeeRepository);
  });

  it("should be register a employee", () => {
    const employee = new Employee(
      "Jose",
      new Email("jose@email.com"),
      new Date("1991-01-02")
    );
    const result = registerEmployeeUsecase.execute(employee);
    expect(isRight(result)).toStrictEqual(true);
    expect(employeeRepository.countByEmail(employee.email.value)).toBe(1);
  });

  it("should not register a employee with e-mail already used", () => {
    employeeRepository.countByEmail = jest.fn().mockReturnValueOnce(1); //i mock this return function just for this test

    const employee = new Employee(
      "Jose",
      new Email("jose@email.com"),
      new Date("1991-01-02")
    );
    const result = registerEmployeeUsecase.execute(employee);
    expect(isLeft(result)).toStrictEqual(true);
    expect(result.value).toStrictEqual(Error("E-mail already used"));
  });
});
