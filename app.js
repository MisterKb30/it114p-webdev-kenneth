const express = require('express');
const bodyParser = require("body-parser")
const app = express();
const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');
const util = require('./util/path');

//prereq
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(util.public));

//routes
app.use(shopRoutes);
app.use('/admin',adminRoutes);

app.use((req,res,next)=> {
    res.status(404).sendFile(util.views + "404.html")
    //res.send('Hello Kenneth');
});


app.listen(3000);