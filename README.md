# ImgEnhancer-API

A restAPI for ImgEnahcner app. This API was developed to provide endpoints that handle data efficiently, route handling, data validation, and more.

## Technologies Used

- **NestJS**: A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.
- **TypeScript**: A language that adds static typing to JavaScript.
- **SQLite**: A relational database used for data persistence.
- **Prisma**: An ORM (Object-Relational Mapping) tool to facilitate database interaction.

## Project setup
1. Install dependencies:

```bash
$ yarn install
```
2. Configure environment variables:
Rename the .env_example file to .env and adjust the variables according to your environment, for example:
```bash
DATABASE_URL=local.db
WEB_SERVICE= http://localhost:frontend-port
AUTHCONFIG_SECRET=secretexemple
AUTHCONFIG_EXPIRES_IN=7d
```

3. Running the database:
Run the following command to generate the tables in the database:
```bash
$ yarn run prisma migrate dev
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```


