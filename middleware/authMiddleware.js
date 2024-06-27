const basicAuth = require('basic-auth');
const config = require('../config/dbConfig');

const authMiddleware = (req, res, next) => {
  const user = basicAuth(req);
  if (!user || user.name !== config.auth.username || user.pass !== config.auth.password) {
    res.set('WWW-Authenticate', 'Basic realm="example"');
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
};

module.exports = authMiddleware;
