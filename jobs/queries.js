const Config = require('../config')
var axios = require('axios');
var Chron = require('./chron')


// V1
function getPrice(symbol, store) {
    axios.get(Config.gemini.api.v2 + "ticker/" + symbol)
    .then(function(result) {
        if(store == true) {
            console.log("second")
            Chron.storePrice(result.data)
        } else {
            console.log("not Storing")
            return result.data
        }
    })
}



function getCandles(symbol) {
    return axios.get(Config.gemini.api.v2 + "<urlvar>" + symbol)
}


module.exports.getPrice = getPrice
