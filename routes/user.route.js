var express = require('express');

var controller = require('../controller/user.controller');
var validate = require('../validate/user-validate');
var router = express.Router();


router.get('/',controller.index);
router.get('/search',controller.search);


router.get('/create',controller.create);

router.get('/vudeptrai',controller.vu);


router.get('/:id',controller.getID);



router.post('/create',validate.postCreate, controller.postCreate);



module.exports = router;