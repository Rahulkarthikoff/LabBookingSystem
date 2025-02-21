const express = require('express');
const router = express.Router();
const { getLabs, getLabById } = require('../controllers/labController');

router.get('/', getLabs);
router.get('/:id', getLabById);

module.exports = router;