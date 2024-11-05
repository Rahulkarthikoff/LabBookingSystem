const express = require('express');
const router = express.Router()

const { RegisterUser, LoginUser ,GetMe} = require('../controller/userController')

const {protect} = require('../middleware/authMidlleware')


router.route('/login').post(LoginUser)

router.route('/me').get(protect ,GetMe)
module.exports = router;