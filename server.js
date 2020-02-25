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

var port = process.env.PORT || 9090;        // set our port

// Database setup
const connectionString = "mongodb+srv://test:<PASS>@cluster0-kkzsx.mongodb.net/test?retryWrites=true&w=majority"
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

// Mongoose Test Schema 

var Schema = mongoose.Schema;
var tickerSchema = new Schema({
    symbol: String,
    open: Number,
    high: Number,
    low: Number,
    close: Number,
    bid: Number,
    ask: Number
});

var Ticker = mongoose.model('Ticker', tickerSchema);





// Constants and other important constant data 
var base_url = "https://api.gemini.com/v2/"

function getBtc() {
    return axios.get(base_url + "ticker/btcusd")
}




// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// V!
// router.get('/btc', function (req, res) {
//     axios.get(base_url + "ticker/btcusd")
//         .then(response => res.json(response.data)
//         )
//         .then(response => Ticker.create(response.data, function(err, ticker){
//             if(err) {
//                 console.log(err)
//             } else {
//                 console.log("data was recorded to mongo" + response.data)
//             }

//         }))
//         .catch(error => {
//             res.json(error)
//         })
// })
router.get('/btc', function (req, res) {
    getBtc().then(function (response) {
            Ticker.create(response.data)
        })
    })
    // more routes for our API will happen here

    // REGISTER OUR ROUTES -------------------------------
    // all of our routes will be prefixed with /api
    app.use('/api', router);

    // START THE SERVER
    // =============================================================================
    app.listen(port);
    console.log('Magic happens on port ' + port);
