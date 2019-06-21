var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');

var middleWare = require('./middleware/auth-middleware');

 var db = require('./db');

var app = express();
var port = 3000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.set('view engine' , 'pug');
app.set('views' , './views');

app.use(express.static('public'));//duong dan den public
app.use(cookieParser());


app.get('/',function(request,response){
	response.render('index',{
		name: 'aaaa'
	});
});


app.use('/users',middleWare.requireAuth ,userRoute);
app.use('/auth',authRoute);

app.listen(port,function(){
	console.log('Server isss runing vu dep trai' + port);
})