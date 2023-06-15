const createUser = require('../src/teste2');
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
    createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(HttpStatus.CREATED.code);
    expect(res.send).toHaveBeenCalledWith({
      id: 1,
      name: 'John Doe',
      job: 'Developer',
    });
  });

  it('should return a bad request if name or job are missing', () => {
    req.body = {};

    createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(HttpStatus.BAD_REQUEST.code);
    expect(res.send).toHaveBeenCalledWith('Name and job are required');
  });
});