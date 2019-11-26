/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

var Article = require("../models/Article.js");    
var TinyURL = require('tinyurl');


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
          
     var article = {};

      TinyURL.shorten(link).then(function(res) {
          article.link = res;
          article.source = srce;
          article.title = title; 
          return(article);
           }, function(err) {
               console.log(err);
           });          
}

module.exports = articleCreate;