var mongoose = require('mongoose');


var tickerSchema = new Schema({
    symbol: String,
    open: Number,
    high: Number,
    low: Number,
    close: Number,
    bid: Number,
    ask: Number,
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Ticker', tickerSchema);
