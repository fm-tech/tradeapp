
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

function runChron(timer, isToggled) {
    if(  isToggled == true ) {
        setInterval(timer,1000);
    } else {
    if( isToggled == false) {
        clearInterval(timerVariable);
    }
    }
}


module.exports.storePrice = storePrice;