const request = require("supertest");
const app = require("../src/app");

describe("App", () => {
  it("GET /", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("get user/");
  });

  it("POST /auth", async () => {
    const user = {
      name: "João Oliveira",
      job: "Desenvolvedor",
    };

    const response = await request(app).post("/auth").send(user);
    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });

  it("GET /user", async () => {
    const response = await request(app)
      .get("/user")
      .query({ name: "João Oliveira" });
    expect(response.status).toBe(200);
  });

  it("GET /users", async () => {
    const response = await request(app).get("/users");
    expect(response.status).toBe(200);
  });

  it("POST /users", async () => {
    const user = {
      name: "John Doe",
      job: "Developer",
    };

    const response = await request(app).post("/users").send(user);

    expect(response.status).toBe(201);
  });

  it("DELETE /users", async () => {
    const name = "João Oliveira";

    //TODO gerar token para usar o put

    const response = await (
      await request(app).delete(`/users?name=${name}`)
    );

    expect(response.status).toBe(200);
  });

  it("PUT /users", async () => {
    const id = 1;
    const name = "John Doe";
    const job = "Developer";

    //TODO gerar token para usar o put

    const response = await request(app)
      .put(`/users?id=${id}`)
      .send({ name, job});
    expect(response.status).toBe(200);
  });

  it("GET /users/access", async () => {
    const name = "João Oliveira";
    const response = await request(app).get(`/users/access?name=${name}`);
    expect(response.status).toBe(200);
  });
});
