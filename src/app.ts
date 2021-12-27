import express, { Request, Response } from "express";
import EmployeeRepositoryArray from "./humanresources/adapter/repository/employeeRepositoryArray";
import EmployeeController from "./humanresources/http/rest/employeeController";

const employeeRepository = new EmployeeRepositoryArray();
const employeeController = new EmployeeController(employeeRepository);

const app = express();
app.use(express.json());
app.use("/employees", employeeController.buildRouter());

export default app;
