const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/user', authMiddleware, userController.getAllUsers);
router.get('/user/:userId', authMiddleware, userController.getUserById);
router.post('/user', authMiddleware, userController.createUser);
router.put('/user/:userId', authMiddleware, userController.updateUser);
router.delete('/user/:userId', authMiddleware, userController.deleteUser);

module.exports = router;
