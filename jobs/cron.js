import { getPrice } from './queries'
import { Ticker } from '../models/currency'

function storePrice(symbol){ 
    var price = getPrice(symbol) 
    Ticker.create(price.data, function(err, price){
        if(err) {
            console.log(err)
        } else {
            console.log(price)
        }
    })
}
function storeFeed(){

}

setInterval(runFunction,1000);

export {storePrice}