import { Request, Response, Router } from "express";
import { isLeft } from "../../../shared/util/either";
import RegisterEmployeeService from "../../application/registerEmployeeService";
import EmployeeRepository from "../../domain/port/employeeRepository";

export default class EmployeeController {
  constructor(readonly employeeRepository: EmployeeRepository) {}

  buildRouter(): Router {
    const router = Router();
    router.post("/", this.registerEmployeeHandler.bind(this));
    return router;
  }

  registerEmployeeHandler(req: Request, res: Response): void {
    const registerEmployeeService = new RegisterEmployeeService(
      this.employeeRepository
    );
    const { name, email, birthday } = req.body;
    const result = registerEmployeeService.execute({
      name,
      email,
      birthday,
    });

    if (isLeft(result)) {
      //format the response error as you wish
      res.status(400).json(result.value.message);
    } else {
      //TODO maybe a constant with url prefix "employees"
      res.setHeader("Location", `/employees/${result.value}`);
      res.sendStatus(201);
    }
  }
}
