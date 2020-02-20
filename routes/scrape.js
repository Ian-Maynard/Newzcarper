/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 
const express = require("express");
var cheerio = require("cheerio");
var request = require("request");
var Note = require("../models/note.js");
var Article = require("../models/Article.js");
var urlScraper = require("../controllers/urlScraper.js");
const router = express.Router(); 
// Get the information.

router.get("/scrape",  (req, res) =>  {
  //  The source options are hard coded here but in the future they will read from a sources file..
        const rEu = urlScraper("REU", "https://www.reuters.com", true, ".article-heading");
        const uPi = urlScraper("UPI","http://www.upi.com/",false,".story");
        const dWe = urlScraper("DWE","http://www.dw.com/",true,".news");
        const sKr = urlScraper("BLM","https://www.bloomberg.com/",true,".top-news-v3-story-headline");
        const tMr = urlScraper("TME","http://www.time.com/",true,".rail-article-title");
        const bBc = urlScraper("BBC","http://bbc.com/",true, ".gs-c-promo-heading__title");
  });
  
module.exports = router;