const express = require('express');
const router = express.Router();
const { signup, login, employeeSignup, employeeLogin } = require('../controllers/authController');

// Company routes
router.post('/signup', signup);
router.post('/login', login);

// Employee routes
router.post('/employee/signup', employeeSignup);
router.post('/employee/login', employeeLogin);

module.exports = router;
