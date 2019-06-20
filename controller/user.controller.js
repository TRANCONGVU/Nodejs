var db = require('../db');
var shortid = require('shortid');

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
module.exports.create = function (req, res) {
	res.render('users/create');

};

module.exports.vu = function (req, res) {
	res.render('users/vu');
};



module.exports.postCreate = function (req, res) {
	req.body.id = shortid.generate();
	// -----bao mat kiem tra nhap vao --------
	var errors = [];

	if(!req.body.name){
		errors.push('vui long nhap ten');
	}
	if(!req.body.phone){
		errors.push('vui long nhap phone');
	}
	if(errors.length){
		res.render('users/create',{
			errors : errors,
			values : req.body
		});
		return;
	}
// ----------------------------------------
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