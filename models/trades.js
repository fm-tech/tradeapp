var mongoose = require('mongoose');


var buySchema = new Schema({
    symbol: String,
    price: Number,
    amount: Number,
    fee: Number,
    date: {type: Date, default: Date.now}
});


var sellSchema = new Schema({
    symbol: String,
    price: Number,
    amount: Number,
    fee: Number,
    date: {type: Date, default: Date.now}
});
module.exports = mongoose.model('Sell', sellSchema),
mongoose.model('Buy', buySchema);

