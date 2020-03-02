var Query  = require('../jobs/queries')

module.exports = {
    store: (req, res, next) => {
        (Query.getPrice(req.params.symbol))
        .then(response => res.json(response.data))
    },
    record: (req, res, next) => {
        
    }    
}