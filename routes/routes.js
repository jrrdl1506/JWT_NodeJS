const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');


router.post('/register',UserController.createUser);
router.post('/login',UserController.loginUser);
router.get('/auth',UserController.authUser);
router.post('/logout',UserController.logout);




module.exports = router;