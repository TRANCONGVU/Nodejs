require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');

var productRoute = require('./routes/product.route');

var middleWare = require('./middleware/auth-middleware');

 var db = require('./db');

var app = express();
var port = 3000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SECTION_SECRET));


app.set('view engine' , 'pug');
app.set('views' , './views');

app.use(express.static('public'));//duong dan den public
app.use(cookieParser());


app.use('/users',middleWare.requireAuth ,userRoute);
app.use('/auth',authRoute);
app.use('/product',productRoute);

app.listen(port,function(){
	console.log('Server isss runing vu dep trai' + port);
})