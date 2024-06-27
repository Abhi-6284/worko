const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  age: Joi.number().integer().min(1),
  city: Joi.string(),
  zipCode: Joi.string().required()
});

const validateUser = (userData) => {
  return userSchema.validate(userData);
};

module.exports = {
  validateUser
};
