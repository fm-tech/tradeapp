// server.js
// BASE SETUP
// =============================================================================
// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using expressmk
var mongoose = require('mongoose');
// var bodyParser = require('body-parser'); Not needed at the moment
 
// configure app to use bodyParser()
// this will let us get the data from a POST
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

var indexRoutes = require('./api/index')
var queryRoutes = require('./api/queries')
var chronRoutes = require('./api/chron')

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
app.use('/api/chron', chronRoutes)



  // START THE SERVER
    // =============================================================================
    app.listen(port);
    console.log('Magic happens on port ' + port);