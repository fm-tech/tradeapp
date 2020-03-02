var Query  = require('../jobs/queries')

module.exports = {
    price: (req, res, next) => {
        (Query.getPrice(req.params.symbol))
       .then(response => res.json(response.data))
    }
}