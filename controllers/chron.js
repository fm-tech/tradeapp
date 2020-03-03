var Query  = require('../jobs/queries')
var Chron = require('../jobs/chron')

module.exports = {
    store: (req, res, next) => {
        (Query.getPrice(req.params.symbol))
        .then(response => res.json(response.data))
    },
    record: (req, res, next) => {
        (Chron.intControl((req.params.symbol)))
        .then(res.send('Wait for the magic'))
     
    }    
}