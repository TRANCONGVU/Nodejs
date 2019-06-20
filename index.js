var express = require('express');
var bodyParser = require('body-parser');

var userRoute = require('./routes/user.route');

 var db = require('./db');

var app = express();
var port = 3000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.set('view engine' , 'pug');
app.set('views' , './views');

app.use(express.static('public'));//duong dan den public

app.get('/',function(request,response){
	response.render('index',{
		name: 'aaaa'
	});
});


app.use('/users',userRoute);

app.listen(port,function(){
	console.log('Server isss runing vu dep trai' + port);
})