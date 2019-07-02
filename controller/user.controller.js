var db = require('../db');
var shortid = require('shortid');
var md5 = require('md5');

module.exports.index = function (req, res) {
	res.render('users/index2', {
		users: db.get('users').value()
	});
};


module.exports.search = function (req, res) {
	var q = req.query.q;
	console.log(req.query);

	// var timkiem = db.get('users').filter({ name : q.toLowerCase() }).value()

	var timkiem = db.get('users').value().filter(function (user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});

	res.render('users/index2', {
		users: timkiem
	});
};

module.exports.searchProduct = function (req, res) {
	var q = req.query.q;
	console.log(req.query);

	// var timkiem = db.get('users').filter({ name : q.toLowerCase() }).value()

	var timkiem = db.get('products').value().filter(function (product) {
		return product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});

	res.render('users/product', {
		products: timkiem
	});
};

module.exports.create = function (req, res) {
	console.log(req.cookies);
	res.render('users/create');

};

module.exports.vu = function (req, res) {
	res.render('users/vu');
};	


module.exports.postCreate = function (req, res) {
	var password = req.body.password;
	var hashedPassword = md5('req.body.password');
	req.body.id = shortid.generate();
	db.get('users').push(req.body).write();
	res.redirect('/users');
};

module.exports.getID = function (req, res) {
	var id = req.params.id;
	var user = db.get('users').find({
		id: id
	}).value()
	console.log(user)

	res.render('users/view', {
		user: user
	});
};