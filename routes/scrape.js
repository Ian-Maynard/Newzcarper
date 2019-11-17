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

    // function articleCreat(srce, url, title, link, articles) {

    //   title = title.replace(/\t|\n/g, ""); // strip out certain characters
    //   title = title.trim(); // Trim Title

    //       if (title.length > 65) {
    //         title = title.substring(0, 64); // constrain length of title
    //       }
    //     // To create shareable URL - Implement bitly here. 
    //               var article = new Article();
    //                   article.source = srce;
    //                   article.title = title;
    //                   article.link = link;
    //     return(article);
                
    // }

  function skraper(srce, sURL, urlSwitch, skrapeParm) {
              // urlSwitch (boolean) is for URL scrapes that require their base url as a prefix 
        
          var articles = [];

          request (sURL,  (error, response, html)  => {
              const $ =  cheerio.load(html); // Pull the DOM
                var num = 0;
                    $(skrapeParm).each( 

                            function (i, element) {
                                     // Pull the link and the title
                                        var link = $(this).children("a").attr("href");
                                        var title = $(this).children("a").text().trim();
                                              if (urlSwitch) {
                                                  link = sURL + link; 
                                                }// If URL root is required.
                                                
                                              console.log(num+"   "+link+" *** "+title);
                                              num++;
                                              if (num > 2) return(false);
                                            },
                                            function(error) 
                                            {throw error;}
                                          );
                                            // Scrape        
                                        }); // Request     
                                return(articles);
  } // skraper
  
                const reuters = skraper("Reuters", "http://www.reuters.com/", true, ".article-heading");
                // const upi = skraper("UPI","http://www.upi.com/",false,".story");
                // const deutschWelle = skraper("Deutsche Welle","http://www.dw.com/",true,".news");
                // const bloomberg = skraper("Bloomberg","https://www.bloomberg.com/",true,".top-news-v3-story-headline");
                // const time =  skraper("Time","http://www.time.com/",true,".rail-article-title");
                // res.render("../public/index.html",articles);
                      
  });
  
module.exports = router;