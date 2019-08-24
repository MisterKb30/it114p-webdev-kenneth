const express = require('express');
const bodyParser = require("body-parser")
const app = express();
app.set('view engine', 'ejs');


const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');
const util = require('./util/path');

//prereq
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(util.public));

//routes
app.use(shopRoutes);
app.use(adminRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: '404 - Page Not Found',
        path: '/'
    });
});


app.listen(3000);