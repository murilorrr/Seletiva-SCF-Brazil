const { getUser, getUsers } = require('../src/teste1');

describe('getUser', () => {
  it('should return a user if found', () => {
    const req = {
      query: {
        name: 'João Oliveira'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
    const next = jest.fn();

    getUser(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(expect.any(Object));
    expect(next).not.toHaveBeenCalled();
  });

  it('should return "User not found" if user is not found', () => {
    const req = {
      query: {
        name: 'NonexistentUser'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
    const next = jest.fn();

    getUser(req, res, next);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith('User not found');
    expect(next).not.toHaveBeenCalled();
  });
});

describe('getUsers', () => {
  it('should return all users', () => {
    const req = {};
    const res = {
      send: jest.fn()
    };
    const next = jest.fn();

    getUsers(req, res, next);

    expect(res.send).toHaveBeenCalledWith(expect.any(Array));
    expect(next).not.toHaveBeenCalled();
  });
});