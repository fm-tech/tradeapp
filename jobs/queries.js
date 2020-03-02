const Config = require('../config')
var axios = require('axios');
var Chron = require('./chron')


// V2
async function getPrice(symbol, store) {
    try {
        var response = await axios.get(Config.gemini.api.v2 + "ticker/" + symbol)
        if(store == true) {
            Chron.storePrice(response.data)
        } else {
            return response
        }
    } catch (error) {
        console.log(error)
    }
    
}



function getCandles(symbol) {
    return axios.get(Config.gemini.api.v2 + "<urlvar>" + symbol)
}


module.exports.getPrice = getPrice
