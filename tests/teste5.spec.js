const { findUserByName } = require("../src/fakeData");
const { HttpStatus } = require("../src/httpStatus");

const readUser = require("../src/teste5");

jest.mock("../src/fakeData", () => ({
  findUserByName: jest.fn(),
}));

jest.mock("../src/httpStatus", () => ({
  HttpStatus: {
    BAD_REQUEST: { code: 400 },
    OK: { code: 200 },
  },
}));

describe("readUser", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should return 400 if name is missing", () => {
    const req = { query: {} };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    readUser(req, res);

    expect(res.status).toHaveBeenCalledWith(HttpStatus.BAD_REQUEST.code);
    expect(res.send).toHaveBeenCalledWith("name is required");
  });

  test("should return user read count when user is found", () => {
    const req = { query: { name: "John" } };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    const user = { name: "John", count: 5 };

    findUserByName.mockReturnValue(user);

    readUser(req, res);

    expect(res.status).toHaveBeenCalledWith(HttpStatus.OK.code);
    expect(res.send).toHaveBeenCalledWith(
      `Usuário ${user.name} foi lido ${user.count} vezes.`
    );
  });

  test("should return 0 as user read count when user is not found", () => {
    const req = { query: { name: "John" } };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    findUserByName.mockReturnValue(undefined);

    readUser(req, res);

    expect(res.status).toHaveBeenCalledWith(HttpStatus.OK.code);
    expect(res.send).toHaveBeenCalledWith(`Usuário ${req.query.name} foi lido 0 vezes.`);
  });
});