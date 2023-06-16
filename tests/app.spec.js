const request = require("supertest");
const app = require("../src/app");
const jwt = require("jsonwebtoken");
const { HttpStatus } = require('../src/httpStatus');

const user = {
  id: 1,
  name: "João Oliveira",
  job: "Desenvolvedor",
};

const newUser = {
  id: 2,
  name: "John Doe",
  job: "Developer",
};

describe("App", () => {
  it("GET /", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.text).toContain("get user/");
  });

  it("POST /auth", async () => {
    const response = await request(app).post("/auth").send(user);

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });

  it("GET /user", async () => {
    const response = await request(app)
      .get("/user")
      .query({ name: user.name });

    expect(response.status).toBe(200);
  });

  it("GET /users", async () => {
    const response = await request(app).get("/users");

    expect(response.status).toBe(200);
  });

  it("POST /users", async () => {
    const response = await request(app).post("/users").send(newUser);

    expect(response.status).toBe(201);
  });

  it("DELETE /users", async () => {
    const token = jwt.sign({ name: user.name, job: user.job }, 'chave-secreta', { expiresIn: '1h' });

    const response = await (
      await request(app).delete(`/users?name=${user.name}`)
          .set('Authorization', token)
    );

    expect(response.status).toBe(200);
  });

  it("PUT /users", async () => {
    const token = jwt.sign({ name: user.name, job: user.job }, 'chave-secreta', { expiresIn: '1h' });

    const response = await request(app)
        .put(`/users?id=${newUser.id}`)
        .set('Authorization', token)
        .send({name: "João O.", job: "Developer"});

    expect(response.status).toBe(200);
  });

  it("GET /users/access", async () => {
    const response = await request(app).get(`/users/access?name=${user.name}`);

    expect(response.status).toBe(200);
  });
});

const nextMock = jest.fn();

describe('authenticateUser middleware', () => {
    test('should return UNAUTHORIZED without token', async () => {

      const response = await request(app)
          .put(`/users?id=${user.id}`)
          .send({name: "João O.", job: "Developer"});

    expect(response.status).toBe(HttpStatus.UNAUTHORIZED.code);

    expect(response.text).toBe('Unauthorized');

    expect(nextMock).not.toHaveBeenCalled();
  });

  test('should return UNAUTHORIZED with invalid token', async () => {

    const response = await request(app)
        .put(`/users?id=${user.id}`)
        .set('Authorization', 'token')
        .send({name: "João O.", job: "Developer"});

    expect(response.status).toBe(HttpStatus.UNAUTHORIZED.code);

    expect(response.text).toBe('Unauthorized');

    expect(nextMock).not.toHaveBeenCalled();
  });
});
