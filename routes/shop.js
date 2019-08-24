const express = require('express');
const pathUtil = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('shop',{
      pageTitle: 'Shop',
      path: '/'
    });
  });

module.exports = router;