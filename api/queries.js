var express = require('express');  
var router = express.Router();   

router.get('/price/:symbol', function (req, res) {
    getPrice(req.params.symbol).then(function (response) {
            Ticker.create(response.data)
            res.json(response.data)
        })
    })
    // more routes for our API will happen here

    // REGISTER OUR ROUTES -------------------------------
    // all of our routes will be prefixed with /api
    
  


module.exports = router;