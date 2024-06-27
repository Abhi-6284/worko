const { CreateUserDTO } = require('../dtos/userDTO');
const userService = require('../services/userService');

const createUser = async (req, res) => {
  try {
    const { email, name, age, city, zipCode } = req.body;
    const createUserDTO = new CreateUserDTO(email, name, age, city, zipCode);
    const newUser = await userService.createUser(createUserDTO);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { email, name, age, city, zipCode } = req.body;
    const updateUserDTO = new CreateUserDTO(email, name, age, city, zipCode);
    const updatedUser = await userService.updateUser(userId, updateUserDTO);
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await userService.getUserById(userId);
    res.json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await userService.deleteUser(userId);
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createUser,
  updateUser,
  getUserById,
  getAllUsers,
  deleteUser
};
