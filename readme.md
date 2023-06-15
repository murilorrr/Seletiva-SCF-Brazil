# Desafio Tecnico SCF
## A Refactoring test

<p align="center">
  <a href="#-introduction">Introduction</a> •
  <a href="#-api">API DOCS</a> •
  <a href="#-contributing">Contributing</a> •
  <a href="https://github.com/murilorrr">About Me</a> •
</p>

### Default method

#### You Need Node with npm install in your machine:

```sh
$ cd Seletiva-SCF-Brazil
$ npm install
$ node 
```

## **Introduction**

This project has a fake database in fakeData.js with only one record.
The idea is to improve the CRUD written in the 4 test files below.

The code writing style will be validated.
Write code that humans can understand.

Feel free to make modifications to the services, code comments, structure, but be concise.

teste1.js
GET on /user

In this file, we have a service that searches the fake database and returns a record.
This code works, but it can be improved.
See what can be done to make it better written and more performant.

teste2.js
POST on /users, discover its intention and correct it.

teste3.js
This file searches for a user and deletes it from the database.
Return success to the client if it has actually been deleted and make the code more performant.

teste4.js
Update the data of a specific user.

teste5.js
Return how many times a particular user has been read in teste1.

teste 6
Define a way to create permission for the user, determine if the user can delete or update users. Create a middleware to validate these permissions and add it to teste4 and teste3.

## 🤝 **API**

| Method | Route | Description | Type of Param | Params |
|-------| ------ | ---- | ------ | ---- | 
|GET| /       |  Retorn all of endpoints from API    |  |  |
|GET| /auth |  Retorn a token jwt to use for put and delete endpoints authentication |  |  |
|GET| /users      |  Retorn all of users    |  |  |
|GET| /user       |  Retorn a user in database from name  | Param String |  name  |
|POST| /users       |   create new user   |   Body    |   name, job   |
|DELETE| /users       |   delete a user from name   |   Param String   |   name   |
|PUT| /users/:id       |   update a user from id   |   Param String, Body   |   id, name, job |
|GET| /users/access       |  Retorn a count with many times a user has requested |  |  |


## 🤝 **Contributing**

This project is for study purposes too, so send me an email telling me what you are doing and why you are doing it, teach me what you know

All kinds of contributions are very welcome and appreciated!

- ⭐️ Star the project
- 🐛 Find and report
- 📥 Submit PRs to help solve issues or add features
- ✋ Influence the future with feature requests
