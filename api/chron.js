var express = require('express');  
var router = express.Router();   

const chronCont = require('../controllers/chron')


router.route('/store/price/:symbol')
    .get(chronCont.store)
    .post()
router.route('/set')
    .get()


module.exports = router;

