const express = require('express');
const bodyParser = require("body-parser")
const app = express();
app.set('view engine', 'ejs');


const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');
const errorController = require('./controller/error');
const util = require('./util/path');

//prereq
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(util.public));

//routes
app.use(shopRoutes);
app.use(adminRoutes);

app.use(errorController.get404);


app.listen(3000);