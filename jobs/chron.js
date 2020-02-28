
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

function runChron(toggle) {
    if(  isToggled == true ) {
        setInterval(toggle,1000);
    } else {

    }
}


module.exports.storePrice = storePrice;