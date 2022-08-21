const express = require('express');
const router = express.Router();
const Poem = require('../model/Poem');

const controller = require('../controller/controller');

router.get('/', controller.find);

router.post('/', controller.create);

module.exports = router