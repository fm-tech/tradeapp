var axios = require('axios');
const { gemini } = require('../config')


function getPrice(symbol) {
    return axios.get(gemini.api.v2 + "ticker/" + symbol)
}
function getCandles(symbol) {
    return axios.get(gemini.api.v2 + "<urlvar>" + symbol)
}


module.exports = getPrice
