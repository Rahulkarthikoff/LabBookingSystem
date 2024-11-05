const express = require('express')
const router = express.Router()

const { getLab , createLab, updateLab, deleteLab} = require('../controller/labController')

const {protect} = require('../middleware/authMidlleware')

const { adminProtect} = require('../middleware/adminMiddleware')

router.route('/').get(protect , getLab).post(protect ,adminProtect, createLab)

router.route('/:id').put(protect ,adminProtect , updateLab).delete(protect , adminProtect, deleteLab)

module.exports = router