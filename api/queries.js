var express = require('express');  
var router = express.Router();   
const { getPrice } = require('../jobs/queries')

router.get('/price/:symbol', function (req, res) {
    getPrice(req.params.symbol).then(function (response) {
            Ticker.create(response.data)
            res.json(response.data)
        })
    })
 

module.exports = router;