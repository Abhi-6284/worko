const request = require('supertest');
const express = require('express');
const userRoutes = require('../routes/userRoutes');
const userService = require('../services/userService');
const { CreateUserDTO } = require('../dtos/userDTO');
const config = require('../config/dbConfig');

jest.mock('../services/userService');

const app = express();
app.use(express.json());
app.use('/worko', userRoutes);

const basicAuth = { user: config.auth.username, pass: config.auth.password };

describe('User Controller', () => {
  describe('POST /worko/user', () => {
    it('should create a user', async () => {
      const userDTO = new CreateUserDTO('test@example.com', 'Test User', 25, 'Test City', '12345');
      const createdUser = { id: '1', email: 'test@example.com', name: 'Test User', age: 25, city: 'Test City', zipCode: '12345' };
      userService.createUser.mockResolvedValue(createdUser);

      const response = await request(app)
        .post('/worko/user')
        .auth(basicAuth.user, basicAuth.pass)
        .send(userDTO)
        .expect(201);

      expect(response.body).toEqual(createdUser);
    });
  });

  describe('GET /worko/user', () => {
    it('should return all users', async () => {
      const users = [
        { id: '1', email: 'test1@example.com', name: 'Test User 1', age: 25, city: 'Test City 1', zipCode: '12345' },
        { id: '2', email: 'test2@example.com', name: 'Test User 2', age: 30, city: 'Test City 2', zipCode: '67890' }
      ];
      userService.getAllUsers.mockResolvedValue(users);

      const response = await request(app)
        .get('/worko/user')
        .auth(basicAuth.user, basicAuth.pass)
        .expect(200);

      expect(response.body).toEqual(users);
    });
  });

  describe('GET /worko/user/:userId', () => {
    it('should return user by ID', async () => {
      const user = { id: '1', email: 'test@example.com', name: 'Test User', age: 25, city: 'Test City', zipCode: '12345' };
      userService.getUserById.mockResolvedValue(user);

      const response = await request(app)
        .get('/worko/user/1')
        .auth(basicAuth.user, basicAuth.pass)
        .expect(200);

      expect(response.body).toEqual(user);
    });
  });

  describe('PUT /worko/user/:userId', () => {
    it('should update a user', async () => {
      const userDTO = new CreateUserDTO('test@example.com', 'Updated User', 26, 'Updated City', '54321');
      const updatedUser = { id: '1', email: 'test@example.com', name: 'Updated User', age: 26, city: 'Updated City', zipCode: '54321' };
      userService.updateUser.mockResolvedValue(updatedUser);

      const response = await request(app)
        .put('/worko/user/1')
        .auth(basicAuth.user, basicAuth.pass)
        .send(userDTO)
        .expect(200);

      expect(response.body).toEqual(updatedUser);
    });
  });

  describe('DELETE /worko/user/:userId', () => {
    it('should soft delete a user', async () => {
      const deletedUser = { id: '1', email: 'test@example.com', name: 'Test User', age: 25, city: 'Test City', zipCode: '12345', isActive: false };
      userService.deleteUser.mockResolvedValue(deletedUser);

      const response = await request(app)
        .delete('/worko/user/1')
        .auth(basicAuth.user, basicAuth.pass)
        .expect(200);

      expect(response.body).toEqual(deletedUser);
    });
  });
});
