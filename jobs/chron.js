var Queries = require('./queries')
var Ticker = require('../models/currency')

function storePrice(symbol){ 
    var price = Queries.getPrice(symbol) 
    console.log(price)
    Ticker.create(price, function(err, price){
        if(err) {
            console.log(err)
        } else {
            console.log(price)
        }
    })
}
function storeFeed(){
    
}

function runChron(toggle) {
    if(  isToggled == true ) {
        setInterval(toggle,1000);
    } else {

    }
}


module.exports.storePrice = storePrice;