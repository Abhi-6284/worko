const userService = require('./userService');
const userDAO = require('../daos/userDAO');
const { CreateUserDTO, UserDTO } = require('../dtos/userDTO');

jest.mock('../daos/userDAO');

describe('User Service', () => {
  describe('createUser', () => {
    it('should create a user and return a UserDTO', async () => {
      const userDTO = new CreateUserDTO('test@example.com', 'Test User', 25, 'Test City', '12345');
      const savedUser = { id: '1', email: 'test@example.com', name: 'Test User', age: 25, city: 'Test City', zipCode: '12345' };
      userDAO.createUser.mockResolvedValue(savedUser);

      const result = await userService.createUser(userDTO);
      expect(result).toEqual(new UserDTO('1', 'test@example.com', 'Test User', 25, 'Test City', '12345'));
    });
  });

  describe('getUserById', () => {
    it('should return a user by ID', async () => {
      const savedUser = { id: '1', email: 'test@example.com', name: 'Test User', age: 25, city: 'Test City', zipCode: '12345' };
      userDAO.getUserById.mockResolvedValue(savedUser);

      const result = await userService.getUserById('1');
      expect(result).toEqual(new UserDTO('1', 'test@example.com', 'Test User', 25, 'Test City', '12345'));
    });
  });

  describe('getAllUsers', () => {
    it('should return all users', async () => {
      const savedUsers = [
        { id: '1', email: 'test1@example.com', name: 'Test User 1', age: 25, city: 'Test City 1', zipCode: '12345' },
        { id: '2', email: 'test2@example.com', name: 'Test User 2', age: 30, city: 'Test City 2', zipCode: '67890' }
      ];
      userDAO.getAllUsers.mockResolvedValue(savedUsers);

      const result = await userService.getAllUsers();
      expect(result).toEqual([
        new UserDTO('1', 'test1@example.com', 'Test User 1', 25, 'Test City 1', '12345'),
        new UserDTO('2', 'test2@example.com', 'Test User 2', 30, 'Test City 2', '67890')
      ]);
    });
  });

  describe('updateUser', () => {
    it('should update a user and return updated UserDTO', async () => {
      const userDTO = new CreateUserDTO('test@example.com', 'Updated User', 26, 'Updated City', '54321');
      const updatedUser = { id: '1', email: 'test@example.com', name: 'Updated User', age: 26, city: 'Updated City', zipCode: '54321' };
      userDAO.updateUser.mockResolvedValue(updatedUser);

      const result = await userService.updateUser('1', userDTO);
      expect(result).toEqual(new UserDTO('1', 'test@example.com', 'Updated User', 26, 'Updated City', '54321'));
    });
  });

  describe('deleteUser', () => {
    it('should soft delete a user and return the UserDTO', async () => {
      const deletedUser = { id: '1', email: 'test@example.com', name: 'Test User', age: 25, city: 'Test City', zipCode: '12345', isActive: false };
      userDAO.softDeleteUser.mockResolvedValue(deletedUser);

      const result = await userService.deleteUser('1');
      expect(result).toEqual(new UserDTO('1', 'test@example.com', 'Test User', 25, 'Test City', '12345'));
    });
  });
});
