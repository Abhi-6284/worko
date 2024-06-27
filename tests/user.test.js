const request = require('supertest');
const app = require('../index');

describe('User API tests', () => {
  let userId;

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/worko/user')
      .send({
        email: 'test@example.com',
        name: 'Test User',
        age: 25,
        city: 'Test City',
        zipCode: '12345'
      });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    userId = res.body._id;
  });

  it('should get user details by ID', async () => {
    const res = await request(app).get(`/worko/user/${userId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id', userId);
  });

  // Add more tests for other API endpoints and edge cases
});
