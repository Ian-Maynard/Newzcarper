/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

const express = require("express");
// var query = require("../controllers/controller")
var cheerio = require("cheerio");
var request = require("request");
var Bitly = require('bitlyapi');
var bitly = new Bitly('fd0a57a9269bf1d523ec4bd38c18f0812c444f04'); // Shorten URL
var router = express.Router();

        function scraper(sURL,cr1,cr2) {
        var time = [];
            request (sURL, function(error, response, html) { 
                var $ = cheerio.load(html);
        
                 $(".rail-article-title").each(function(i, element)  {
                    var link = $(this).children("a").attr("href");
                    var title = $(this).children("a").text().trim(); // Scrape the title from the DOM
                        bitly.shorten(link).then(function(response) { 
                            link = response.data.url;
                            console.log('Link is : '+link+"  Title: "+title);
                            time.push({
                                title: title,
                            link: link
                                });
                        }, 
                        function(error) {
                        throw error;
                        });
                 });
            });

        }

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
        
        // Grab an article by it's ObjectId
        app.get("/articles/:id", function(req, res) {
          Article.findOne({ "_id": req.params.id })
          // ..and populate all of the notes associated with it
          .populate("note")
          // now, execute our query
          .exec(function(error, doc) {
            // Log any errors
            if (error) {
              console.log(error);
            }
            // Otherwise, send the doc to the browser as a json object
            else {
              res.json(doc);
            }
          });
        });


        app.post("/articles/:id", function(req, res) {
          var newNote = new Note(req.body);
        
          newNote.save(function(error, doc) {
            if (error) {
              console.log(error);
            }
            else {
              Article.findOneAndUpdate({ "_id": req.params.id }, { "note": doc._id }).exec(function(err, doc) {
                if (err) {
                  console.log(err);
                }
                else {
                  res.send(doc);
                }
              });
            }
          });
        });

module.exports = router;