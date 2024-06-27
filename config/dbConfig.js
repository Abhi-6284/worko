require('dotenv').config();

module.exports = {
  db: process.env.DB_URI,
  port: process.env.PORT || 3000,
  auth: {
    username: process.env.AUTH_USERNAME,
    password: process.env.AUTH_PASSWORD,
  }
};
