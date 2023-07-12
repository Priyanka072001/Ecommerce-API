const express = require('express');

const router = express.Router();

const productApi = require('../controller/product');


router.use('/product', require('./product'));

module.exports = router;