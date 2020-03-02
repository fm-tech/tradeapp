
var Ticker = require('../models/currency')

function storePrice(data){ 
    console.log("third")
    Ticker.create(data, function(err, dataStored){
        if(err) {
            console.log(err)
        } else {
            console.log(dataStored)
        }
    })
  
}

function storeFeed(){
    
}

runTest = () => {
    console.log('Hello world')
}

runChron = (callback) => {
    setInterval(callback, 5000)
}

module.exports.storePrice = storePrice
module.exports.runChron = runChron
module.exports.runTest = runTest