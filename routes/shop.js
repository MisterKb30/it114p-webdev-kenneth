const express = require('express');
const pathUtil = require('../util/path');
//const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
    //console.log(path.join(path.dirname(process.mainModule.filename),'views','shop.html'));
    //res.sendFile(path.join(path.dirname(process.mainModule.filename),'views','shop.html'));
  res.sendFile(pathUtil.views + 'shop.html');
});

module.exports = router;