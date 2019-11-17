/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

const express = require("express");
var cheerio = require("cheerio");
var request = require("request");
var Bitly = require("bitlyapi");
var Note = require("../models/note.js");
var Article = require("../models/Article.js");
var bitly = new Bitly('fd0a57a9269bf1d523ec4bd38c18f0812c444f04'); // Shorten URL
const router= express.Router(); 

router.get("/scrape",  (req, res) =>  {
  
                const reuters =  skraper("Reuters", "http://www.reuters.com/", true, ".article-heading");
                const upi = skraper("UPI","http://www.upi.com/",false,".story");
                // const deutschWelle = skraper("Deutsche Welle","http://www.dw.com/",true,".news");
                // const bloomberg = skraper("Bloomberg","https://www.bloomberg.com/",true,".top-news-v3-story-headline");
                // const time =  skraper("Time","http://www.time.com/",true,".rail-article-title");
                // res.render("../public/index.html",articles);
                      
  });
  
module.exports = router;