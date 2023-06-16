const request = require('supertest');
const app = require('../src/app');
const { HttpStatus } = require('../src/httpStatus');

const user = {
  id: 1,
  name: "João Oliveira",
  job: "Desenvolvedor",
};

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