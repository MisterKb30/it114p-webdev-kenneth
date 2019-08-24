const express = require('express');
const pathUtil = require('../util/path');

const shopController = require('../controller/shop');

const router = express.Router();

router.get('/', shopController.getProducts);

module.exports = router;