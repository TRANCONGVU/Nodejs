var express = require('express');

var controller = require('../controller/product.controller');
var validate = require('../validate/user-validate');

var middleWare = require('../middleware/auth-middleware');

var router = express.Router();

router.get('/',controller.product);
router.get('/searchProduct',controller.searchProduct);


module.exports = router;