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


router.get("/scrape", async (req, res) => {

    function skraper(srce, sURL, urlSwitch, skrapeParm) {
              // urlSwitch (boolean) is for URL scrapes that require their base url as a prefix 
        var linkNum = 0; //Article counter
        const linkTotal = 2;
        var article = new Article();
        var articles = [];

          request (sURL, async (error, response, html)  => { 
              const $ =  cheerio.load(html); // Pull the DOM
                    $(skrapeParm).each( await function(i, element) { // Pull all the instances of a parameter
                                        // Pull the link and the title

                                        var link  =  $(this).children("a").attr("href");
                                        var title = $(this).children("a").text().trim(); 
                                            title = title.replace(/\t|\n/g,"");  // strip out certain characters
                                            title = title.trim(); // Trim Title
              
                                            if (title.indexOf('(UPI) --') > -1 ) 
                                                      title = title.substring(title.indexOf('(UPI) --')+8,title.length);
              
                                            if (title.length > 65) 
                                                title = title.substring(0,64); // constrain length of title
    
                                            if (urlSwitch) link = sURL + link; // If URL root is required.
    
                                            // Create shareable URL - Implement bitly here. 
                                          
                                            if (sURL && title && link) {
                                                      article.source = srce;
                                                      article.title = title; 
                                                      article.link = link;
                                                      articles.push(article);
                                                }

                                          linkNum++;
                                            if (linkNum === linkTotal) {
                                              console.log(articles);
                                              return (articles);
                                          }
                                      },

                                      function(error) {throw error;}
                                  );
                                      // Scrape        
                            }); // Request        
              } // skraper
        
                const reuters = await skraper("Reuters","http://www.reuters.com/",true,".article-heading");
                res.send(reuters);
                const upi = await skraper("UPI","http://www.upi.com/",false,".story");
                const deutschWelle = await skraper("Deutsche Welle","http://www.dw.com/",true,".news");
                const bloomberg = await skraper("Bloomberg","https://www.bloomberg.com/",true,".top-news-v3-story-headline");
                const time = await skraper("Time","http://www.time.com/",true,".rail-article-title");
                // res.render("../public/index.html",articles);
  });
  
module.exports = router;