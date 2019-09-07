const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: 'add-product'
  });
};

exports.postAddProduct = (req, res, next) => {
  
  console.log(req.body);
  const product = new Product(null, req.body.title, req.body.image_url, req.body.description, req.body.price);
  product.save().then(() => {
    res.redirect('/');
  }).catch(err => console.log(err));
}