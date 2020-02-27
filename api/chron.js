var express = require('express');  
var router = express.Router();   

import {storePrice} from '../jobs/cron'

router.get('/chron/store/price/:symbol', function (req, res) {
    storePrice(req.params.symbol)    
    res.json({ message: 'Chron Job Trigger has been submited' });
});

module.exports = router;

