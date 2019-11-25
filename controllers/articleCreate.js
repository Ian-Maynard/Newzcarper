/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

var Bitly = require("bitlyapi");
var Article = require("../models/Article.js");
var bitly = new Bitly('fd0a57a9269bf1d523ec4bd38c18f0812c444f04'); // Shorten URL

function articleCreate(srce, title, link, sURL, urlSwitch) {
// Input: Current title and link for article, and null article
// Output: a formatted article 
 
               title = title.replace(/\t|\n/g, ""); // strip out certain characters
               title = title.trim(); // Trim Title

               if (title.length > 65) {
                    // title = title.substring(0, 64); // constrain length of title
                    }
                              
               if (urlSwitch) {
                    link = sURL + link; 
               }
          // If URL root is required.
          // To create shareable URL - Implement URL shortener bitly here. 
          
          var article = {};
          article.source = srce;
          article.title = title;
          article.link = link;

          console.log("Article Created as   "+article.link+" *** "+article.title);
          return(article);
}

module.exports = articleCreate;