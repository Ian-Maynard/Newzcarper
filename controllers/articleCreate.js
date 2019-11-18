/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

var Bitly = require("bitlyapi");
var Article = require("../models/Article.js");
var bitly = new Bitly('fd0a57a9269bf1d523ec4bd38c18f0812c444f04'); // Shorten URL
const articleCreate = module.exports();

function articleCreat(title, link, urlSwitch, article) {
// Input: Current title and link for article, and null article
// Output: a formatted article 

      title = title.replace(/\t|\n/g, ""); // strip out certain characters
      title = title.trim(); // Trim Title

      if (title.length > 65) {
            title = title.substring(0, 64); // constrain length of title
          }
                      
     if (urlSwitch) {
          link = sURL + link; 
         }// If URL root is required.
            // To create shareable URL - Implement bitly here. 
    // To create shareable URL - Implement bitly here. 

    article.source = srce;
    article.title = title;
    article.link = link;
    console.log("Article Created as   "+link+" *** "+title);
    return(article);
}