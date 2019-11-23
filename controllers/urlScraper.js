/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

var cheerio = require("cheerio");
var request = require("request");
var Bitly = require("bitlyapi");
var Note = require("../models/note.js");
var articleCreate = require("./articleCreate.js");
var Article = require("../models/Article.js");
var bitly = new Bitly('fd0a57a9269bf1d523ec4bd38c18f0812c444f04'); // Shorten URL

function urlScraper(srce, sURL, urlSwitch, skrapeParm) {
// urlSwitch (boolean) is for URL scrapes that require their base url as a prefix 

    var articles = [];
    var num = 0;

    request (sURL,  (error, response, html)  => {
      // Use request to pull the HTML
        const $ =  cheerio.load(html); // Load html into Cheerio 

          $(skrapeParm).each(
                        function (i, element) {
                            // Pull the links and the titles
                                var link = $(this).children("a").attr("href");
                                var title = $(this).children("a").text().trim();

                                console.log("Article scraped as   "+link+" *** "+title);

                                var article = {
                                srce: "",
                                title:"",
                                note:""
                              };

                                art = articleCreate(srce, title, link, urlSwitch, article);

                                num++; 

                             if (num > 2) return(false);
                                  },

                                  function(error) 
                                  {throw error;}
                                );
                                  // Scrape        
                              }); // Request   

                      return(art);
} // skraper

module.exports= urlScraper; 