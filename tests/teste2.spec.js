const {createUserFunction, highestIdFunction } = require('../src/teste2');
const { setFakeData } = require('../src/fakeData');
const { HttpStatus } = require('../src/httpStatus');

describe('createUser', () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {
        name: 'John Doe',
        job: 'Developer',
      },
    };

    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new user', () => {
    setFakeData([]);
    createUserFunction(req, res);

    expect(res.status).toHaveBeenCalledWith(HttpStatus.CREATED.code);
    expect(res.send).toHaveBeenCalledWith({
      id: 1,
      name: 'John Doe',
      job: 'Developer',
    });
  });

  it('should return a bad request if name or job are missing', () => {
    req.body = {};

    createUserFunction(req, res);

    expect(res.status).toHaveBeenCalledWith(HttpStatus.BAD_REQUEST.code);
    expect(res.send).toHaveBeenCalledWith('Name and job are required');
  });

  test("should return 0 when data is empty", () => {
    const data = [];
    const expectedHighestId = 0;

    const highestIdResult = highestIdFunction(data);

    expect(highestIdResult).toBe(expectedHighestId);
  });

  test("should return the highest id when data has multiple users", () => {
    const data = [
      { id: 1, name: "John" },
      { id: 3, name: "Jane" },
      { id: 2, name: "Mark" },
    ];
    const expectedHighestId = 3;

    const highestIdResult = highestIdFunction(data);

    expect(highestIdResult).toBe(expectedHighestId);
  });

  test("should return the id of the only user in data", () => {
    const data = [{ id: 1, name: "John" }];
    const expectedHighestId = 1;

    const highestIdResult = highestIdFunction(data);

    expect(highestIdResult).toBe(expectedHighestId);
  });
});