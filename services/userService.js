const userDAO = require('../daos/userDAO');
const { CreateUserDTO, UserDTO } = require('../dtos/userDTO');

const createUser = async (createUserDTO) => {
  const newUser = await userDAO.createUser(createUserDTO);
  return new UserDTO(newUser.id, newUser.email, newUser.name, newUser.age, newUser.city, newUser.zipCode);
};

const updateUser = async (userId, updateUserDTO) => {
  const updatedUser = await userDAO.updateUser(userId, updateUserDTO);
  return new UserDTO(updatedUser.id, updatedUser.email, updatedUser.name, updatedUser.age, updatedUser.city, updatedUser.zipCode);
};

const getUserById = async (userId) => {
  const user = await userDAO.getUserById(userId);
  return new UserDTO(user.id, user.email, user.name, user.age, user.city, user.zipCode);
};

const getAllUsers = async () => {
  const users = await userDAO.getAllUsers();
  return users.map(user => new UserDTO(user.id, user.email, user.name, user.age, user.city, user.zipCode));
};

const deleteUser = async (userId) => {
  const deletedUser = await userDAO.softDeleteUser(userId);
  return new UserDTO(deletedUser.id, deletedUser.email, deletedUser.name, deletedUser.age, deletedUser.city, deletedUser.zipCode);
};

module.exports = {
  createUser,
  updateUser,
  getUserById,
  getAllUsers,
  deleteUser
};
