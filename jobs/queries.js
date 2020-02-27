var axios = require('axios');

function getPrice(symbol) {
    return axios.get(gemini_url + "ticker/" + symbol)
}
function getCandles(symbol) {
    return axios.get(gemini_url + "<urlvar>" + symbol)
}


export { getPrice };
