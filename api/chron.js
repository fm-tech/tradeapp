var express = require('express');  
var router = express.Router();   
var Chron = require('../jobs/chron')


router.get('/store/price/:symbol', function (req, res) {
    Chron.storePrice(req.params.symbol)    
    res.json({ message: 'Chron Job Trigger has been submited' });
});

module.exports = router;

