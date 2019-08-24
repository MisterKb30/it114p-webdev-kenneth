const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    console.log(products);
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  };