## This repository shows a example of Hexagonal Architecture (Ports and adapters) using Typescript

**My goal with this repository is demonstrate without any external tool, i.e. Database, how implement a API using the Hexagonal Architecture principles.**

_I used the framework ExpressJS to give the input options of this Http Rest API, but you can easily change for GraphQL with Apollo_

### Project structure

- `server.ts`: is just for initalize the expressJs server
- `app.ts`: here i create the instances and give the right adapters for each one. Ah... i use the build routers too :D
- `humanresources`: this folder contains all the resources for "survive", using the DDD concepts, in the human resources bounded context. Each directory is a DDD context. We can have the financedepartment, warehouse, etc...
- `shared`: in this folder we have shared resources, like the humanresources directory, for use in multiple bounded contexts.
- `test`: in this folder we have integration tests, i.e.: use cases, services, database, etc.

### Understanding the humanresources folder

- `http/rest`: we have the entry point to API
- `domain`: we have the domain entities, ports (interfaces) and use cases. Keep all the business logic.
- `application`: we have the "glue" between Controller (Rest) and Use Cases (Domain). With the services, i can validate and transform input data in domain data.
- `adapter`: this folder keep all the concrete implementations for necessary ports. In this case, the repositories.

#### Some considerations

- I keep the unit tests in the same directory of the tested file. For me this make more sense since is a closed scope.
- `tsc` command don't generate JS files for \*.test.ts
- I put a lot of employeeRepository adapters... but only one is implemented (Array). The others is just for demonstrate that you can have any kind of implementation, with Postgres, MongoDb, etc...
- `email.ts` is a Value Object that contains your own rule.

#### Commands

- To run: install the packages with `npm install` and start the server with `npm start`.
- To run the tests: execute `npm test` command.
