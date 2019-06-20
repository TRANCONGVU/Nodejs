module.exports.postCreate = function(req,res,next){
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
    next();
// ----------------------------------------
};