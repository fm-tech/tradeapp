
const Ticker = require('../models/currency')
const Query  = require('../jobs/queries')

function storePrice(data){ 
    Ticker.create(data, function(err, dataStored){
        if(err) {
            console.log(err)
        } else {
            console.log(`Storing Data: ${dataStored}`)
        }
    })
  
}


function storeFeed(){
    
}

runTest = () => {
    console.log('Hello world')
}

const intControl = async (symbol) => {
    setInterval(function(){
        dataToGrab(symbol)
        .then(console.log('done'))
    }, 5000)
}

const dataToGrab = async (symbol) =>  {
    (Query.getPrice(symbol))
    .then(response => storePrice(response.data))
}

module.exports.storePrice = storePrice
module.exports.runTest = runTest
module.exports.intControl = intControl