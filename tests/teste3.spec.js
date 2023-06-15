const { getFakeData, setFakeData } = require("../src/fakeData");
const { HttpStatus } = require("../src/httpStatus");

const deleteHandler = require("../src/teste3");

describe("Delete Handler", () => {
  beforeEach(() => {
    // Configuração inicial dos dados falsos antes de cada teste
    setFakeData([
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
      { id: 3, name: "Bob Johnson" },
    ]);
  });

  test("should delete user by name and return status OK", () => {
    const req = {
      query: {
        name: "Jane Smith",
      },
    };
    const sendMock = jest.fn();
    const res = {
      status: jest.fn(() => ({
        send: sendMock,
      })),
    };

    deleteHandler(req, res, null);

    expect(getFakeData()).toEqual([
      { id: 1, name: "John Doe" },
      { id: 3, name: "Bob Johnson" },
    ]);
    expect(res.status).toHaveBeenCalledWith(HttpStatus.OK.code);
    expect(sendMock).toHaveBeenCalled();
  });

  test("should return status NOT_FOUND if user with given name is not found", () => {
    const req = {
      query: {
        name: "Nonexistent User",
      },
    };
    const sendMock = jest.fn();
    const res = {
      status: jest.fn(() => ({
        send: sendMock,
      })),
    };

    deleteHandler(req, res, null);

    expect(getFakeData()).toEqual([
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
      { id: 3, name: "Bob Johnson" },
    ]);
    expect(res.status).toHaveBeenCalledWith(HttpStatus.NOT_FOUND.code);
    expect(sendMock).toHaveBeenCalledWith("Not Found");
  });
});