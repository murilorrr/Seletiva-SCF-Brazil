const { getFakeData, updateFakeUser } = require("../src/fakeData");
const { HttpStatus } = require("../src/httpStatus");

const { updateUser } = require("../src/teste4");

jest.mock("../src/fakeData", () => ({
  getFakeData: jest.fn(),
  updateFakeUser: jest.fn(),
}));

jest.mock("../src/httpStatus", () => ({
  HttpStatus: {
    BAD_REQUEST: { code: 400 },
    OK: { code: 200 },
    NOT_FOUND: { code: 404 },
  },
}));

describe("updateUser", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should return 400 if name or job is missing", () => {
    const req = { body: {}, query: 1 };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    updateUser(req, res);

    expect(res.status).toHaveBeenCalledWith(HttpStatus.BAD_REQUEST.code);
    expect(res.send).toHaveBeenCalledWith("Name and job are required");
  });

  test("should return 404 if user is not found", () => {
    const req = { body: { name: "John", job: "Developer" }, query: { id: 1 } };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    getFakeData.mockReturnValue([]);
    updateUser(req, res);

    expect(res.status).toHaveBeenCalledWith(HttpStatus.NOT_FOUND.code);
    expect(res.send).toHaveBeenCalledWith("User not found");
  });

  test("should update user and return 200 if user is found", () => {
    const req = { body: { name: "John", job: "Developer" }, query: { id: 1 } };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    const user = { id: 1, name: "Jane", job: "Designer" };
    const updatedUser = { id: 1, name: "John", job: "Developer" };

    getFakeData.mockReturnValue([user]);
    updateFakeUser.mockReturnValue(updatedUser);

    updateUser(req, res);

    expect(res.status).toHaveBeenCalledWith(HttpStatus.OK.code);
    expect(res.send).toHaveBeenCalledWith(updatedUser);
    expect(updateFakeUser).toHaveBeenCalledWith(user.id, req.body);
  });
});
