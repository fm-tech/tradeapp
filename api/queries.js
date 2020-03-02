var express = require('express');  
var router = express.Router();   

const queryCont = require('../controllers/queries')

router.route('/price/:symbol')
    .get(queryCont.price)
    .post()

module.exports = router;