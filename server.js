// DEPENDENCIES
/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 


var engines = require('consolidate');
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var app = express(); // reference Express 
const routes = require('./routes/routes');
const scrape = require('./routes/scrape');
// const router = express.Router(); 


app.set('view engine', 'html');


mongoose.Promise = Promise; // configure mongoose for ES6 promises

app.engine('html', engines.mustache);
app.use(logger("dev"));
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public")); //Static Directory
app.use('/', routes);
app.use('/scrape', scrape);

// Mongoose config and init
mongoose.connect("mongodb://localhost/scraperdata14", { useNewUrlParser: true, useUnifiedTopology: true } ); // Mongod connection
var db = mongoose.connection;
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
}); 
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Listen on port 7000
app.listen(7000, function() {
  console.log("App running on port 7000!");
});

