/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

var cheerio = require("cheerio");
var request = require("request");
var Note = require("../models/note.js");
var articleCreate = require("./articleCreate.js");
var Article = require("../models/Article.js");

function urlScraper(srce, sURL, urlSwitch, skrapeParm) {
  
  // urlSwitch (boolean) is for URL scrapes that require their base url as a prefix 

var art = [];
var num = 0;

request (sURL,  (error, response, html)  => {
      // Use request to pull the HTML
  const $ =  cheerio.load(html); // Load html into Cheerio 
      
      $(skrapeParm).each(

             function (i, element) {

                            // Pull the links and the titles
                    var link = $(this).children("a").attr("href");
                    var title = $(this).children("a").text().trim();
                    
                    // console.log("Article "+num+" scraped as "+link+" *** "+title);

                    console.log(articleCreate(srce, title, link, sURL, urlSwitch));
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