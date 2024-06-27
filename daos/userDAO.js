const User = require('../models/User');

class UserDAO {
  async createUser(userDTO) {
    const { email, name, age, city, zipCode } = userDTO;
    const newUser = new User({ email, name, age, city, zipCode });
    return await newUser.save();
  }

  async updateUser(userId, userDTO) {
    const { email, name, age, city, zipCode } = userDTO;
    return await User.findByIdAndUpdate(userId, { email, name, age, city, zipCode }, { new: true });
  }

  async getUserById(userId) {
    return await User.findById(userId).exec();
  }

  async getAllUsers() {
    return await User.find({ isActive: true }).exec();
  }

  async softDeleteUser(userId) {
    return await User.findByIdAndUpdate(userId, { isActive: false }, { new: true });
  }
}

module.exports = new UserDAO();
