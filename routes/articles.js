/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 
// Get all articles and push them to the Dom 

var express = require("express");
var bodyParser = require("body-parser");
// var logger = require("morgan");
var mongoose = require("mongoose");
var request = require("request");
var app = express(); // reference Express 
var Article = require("./models/Article.js");
mongoose.Promise = Promise; // configure mongoose for ES6 promises
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public")); //Static Directory


app.get("/articles", function(req, res) {
    Article.find({}, function(error, doc) {
    // Log any errors
    if (error) {
      console.log(error);
    }
    // Or send the doc to the browser as a json object
    else {
      res.json(doc);
    }
  });
});

const router = express.Router(); 
