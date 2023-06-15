# SCF Technical Challenge
## A Refactoring Test

[Introduction](#introduction) •
[API Documentation](#api-documentation) •
[Contributing](#contributing) •
[About Me](https://github.com/murilorrr)

## Introduction

This project contains a fake database in `fakeData.js` with only one record. The purpose of this challenge is to improve the CRUD operations written in the following 4 test files.

The code's readability and performance will be evaluated, so it is important to write code that is easily understandable by humans.

#### Teste1.js - GET on `/user`

In this file, there is a service that queries the fake database and returns a single record. While the code works, there is room for improvement. Analyze and implement modifications to make it better written and more performant.

#### Teste2.js - POST on `/users`

This file represents a POST request to the `/users` endpoint. Analyze the code, understand its intention, and correct any issues that you identify.

#### Teste3.js - DELETE on `/users`

This file searches for a user in the database and deletes it if found. Return a success response to the client if the deletion is successful and optimize the code for better performance.

#### Teste4.js - PUT on `/users/:id`

This file updates the data of a specific user identified by the provided ID. Review the code and make any necessary improvements.

#### Teste5.js - GET on `/users/access`

Implement a functionality that returns the number of times a specific user has been accessed in `Teste1.js`.

#### Teste 6 - User Permissions

Define a way to grant permissions to users, allowing or restricting their ability to delete or update other users. Create a middleware function to validate these permissions and apply it to `Teste4.js` and `Teste3.js`.

## API Documentation

| Method | Route              | Description                                                      | Type of Parameter | Parameters     |
| ------ | ------------------ | ---------------------------------------------------------------- | ----------------- | -------------- |
| GET    | /                  | Returns all endpoints available in the API                       |                   |                |
| GET    | /auth              | Returns a JWT token for authentication on PUT and DELETE requests | Request Body     | name, job      |
| GET    | /users             | Returns all users in the database                                |                   |                |
| GET    | /user              | Returns a user from the database based on the provided name      | String Param      | name           |
| POST   | /users             | Creates a new user                                               | Request Body      | name, job      |
| DELETE | /users             | Deletes a user based on the provided name                        | String Param      | name           |
| PUT    | /users             | Updates a user based on the provided ID                          | String Param, Request   | id, name, job  |
| GET    | /users/access      | Returns the number of times a specific user has been accessed    | String Param      | name           |

## To Run 
#### Prerequisites: Node.js with npm installed on your machine.

```sh
$ cd Seletiva-SCF-Brazil
$ npm install
$ node 
```

## 👣 Next steps
- [ ]  Change query parameter from "name" to "id" in the GET and DELETE endpoints
- [X]  API documentation
- [ ]  Create CI & CD for this repo
- [X]  Improve JSON validation
- [ ]  Test for at least 90% coverage of the application


## Contributing

This project is also intended for educational purposes. If you are interested in contributing, please send me an email explaining your plans and reasons for contributing. I would love to learn from your insights and knowledge.

All types of contributions are highly appreciated:

- ⭐️ Star the project
- 🐛 Find and report issues
- 📥 Submit pull requests to help resolve issues or add features
- ✋ Influence the future by suggesting new features
