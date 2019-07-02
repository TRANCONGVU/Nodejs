var db = require('../db');
module.exports.product = function(req ,res){
	var page = parseInt(req.query.page) || 1 ; // n
	var perPage = 8 ; //x
	var start = (page -1) * perPage;
	var end = page * perPage;


	res.render('products/product.pug',{
		products: db.get('products').value().slice(start , end)
	});
};
module.exports.searchProduct = function (req, res) {
	var q = req.query.q;
	console.log(req.query);

	// var timkiem = db.get('users').filter({ name : q.toLowerCase() }).value()

	var timkiem = db.get('products').value().filter(function (product) {
		return product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});

	res.render('products/product.pug', {
		products: timkiem
	});
};