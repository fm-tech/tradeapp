var express = require('express');  
var router = express.Router();   
var Query = require('../jobs/queries')


router.get('/store/price/:symbol', function (req, res) {
    Query.getPrice(req.params.symbol, true)
    console.log("First")
    res.json({ message: 'Chron Job Trigger has been submited' });
});

module.exports = router;

