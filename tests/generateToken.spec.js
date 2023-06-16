const jwt = require('jsonwebtoken');
const { HttpStatus } = require("../src/httpStatus");
const generateToken = require("../src/teste6")

describe("generateToken", () => {
  test("should return 401 and send 'Permission denied' when job is not 'Desenvolvedor'", () => {
    const req = { body: { name: "John", job: "Analista" } };
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    const next = jest.fn();

    jwt.sign = jest.fn();

    generateToken(req, res, next);

    expect(jwt.sign).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(HttpStatus.UNAUTHORIZED.code);
    expect(res.send).toHaveBeenCalledWith("Permission denied");
  });

  test("should generate and send a token in the response", () => {
    const req = { body: { name: "John", job: "Desenvolvedor" } };
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    const next = jest.fn();

    jwt.sign = jest.fn().mockReturnValue("mocked-token");

    generateToken(req, res, next);

    expect(jwt.sign).toHaveBeenCalledWith(
      { name: "John", job: "Desenvolvedor" },
      'chave-secreta',
      { expiresIn: '1h' }
    );
    expect(res.json).toHaveBeenCalledWith({ token: "mocked-token" });
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.send).not.toHaveBeenCalled();
  });

});