/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

var Article = require("../models/Article.js");    
var TinyURL = require('tinyurl');

async function articleCreate(srce, title, link, sURL, urlSwitch) {
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

await TinyURL.shorten(link, function(res, err) {
          link = res;
          if (err)
              console.log(err);
      });

           console.log("link is: ",link);
           article.link = link;
           article.source = srce;
           article.title = title; 
           return(article);

}

module.exports = articleCreate;