const express = require('express');
const router = express.Router();
const productController = require('../controller/product');

// /add-product => GET
router.get('/add-product', productController.getAddProduct);

// /add-product => POST
router.post('/add-product', productController.postAddProduct);

module.exports = router;