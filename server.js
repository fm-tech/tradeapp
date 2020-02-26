// server.js
// BASE SETUP
// =============================================================================
// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var axios = require('axios');
var mongoose = require('mongoose');
// var bodyParser = require('body-parser'); Not needed at the moment
 
// configure app to use bodyParser()
// this will let us get the data from a POST
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

var indexRoutes = require('./api/index')
var queryRoutes = require('./api/queries')

var port = process.env.PORT || 9090;        // set our port

// Database setup
const connectionString = "mongodb+srv://test:Welcome123@cluster0-kkzsx.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true }); //No password used to keep this example short
//  Aloows to recieve promise data
//  mongoose.Promise = global.Promise;

// DB variable
var db = mongoose.connection;
// DB troubleshooting console logs 
db.on('error', console.error.bind(console, 'Connection error'));
db.on('open', function (callback) {
    console.log('Connected to database.');
});

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

app.use('/api', indexRoutes)
app.use('/api/query', queryRoutes)

// Mongoose Test Schema 

var Schema = mongoose.Schema;
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
var Ticker = mongoose.model('Ticker', tickerSchema);

var Schema = mongoose.Schema;
var buySchema = new Schema({
    symbol: String,
    price: Number,
    amount: Number,
    fee: Number,
    date: {type: Date, default: Date.now}
});
var Buy = mongoose.model('Buy', buySchema);

var Schema = mongoose.Schema;
var sellSchema = new Schema({
    symbol: String,
    price: Number,
    amount: Number,
    fee: Number,
    date: {type: Date, default: Date.now}
});
var Sell = mongoose.model('Sell', sellSchema);

// Constants and other important constant data 
var gemini_url = "https://api.gemini.com/v2/"

function getPrice(symbol) {
    return axios.get(gemini_url + "ticker/" + symbol)
}

  // START THE SERVER
    // =============================================================================
    app.listen(port);
    console.log('Magic happens on port ' + port);