var express = require('express');

var controller = require('../controller/user.controller');
var validate = require('../validate/user-validate');

var middleWare = require('../middleware/auth-middleware');

var router = express.Router();


router.get('/' ,controller.index);

router.get('/cookie',function(req,res,next){
    res.cookie('user-id',12345);
    res.send('helloo');
});


router.get('/search',controller.search);

router.get('/create',controller.create);

router.get('/vudeptrai',controller.vu);


router.get('/:id',controller.getID);



router.post('/create',validate.postCreate, controller.postCreate);



module.exports = router;