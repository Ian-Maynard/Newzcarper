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


function articleCreat(srce, url, title, link, articles) {

      title = title.replace(/\t|\n/g, ""); // strip out certain characters
      title = title.trim(); // Trim Title

          if (title.length > 65) {
            title = title.substring(0, 64); // constrain length of title
          }
        // To create shareable URL - Implement bitly here. 

                  var article = new Article();
                      article.source = srce;
                      article.title = title;
                      article.link = link;
        return(article);
}