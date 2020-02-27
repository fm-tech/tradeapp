var axios = require('axios');
const Config = require('../config')


async function getPrice(symbol) {
    axios.get(Config.gemini.api.v2 + "ticker/" + symbol)
    .then(function(result) {
        console.log(result.data)
        return result.data
    })
   
}

async function getCandles(symbol) {
    return axios.get(Config.gemini.api.v2 + "<urlvar>" + symbol)
}


module.exports.getPrice = getPrice
