/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

function skraper(srce, sURL, urlSwitch, skrapeParm) {

    // urlSwitch (boolean) is for URL scrapes that require their base url as a prefix 

var articles = [];

request (sURL,  (error, response, html)  => {


    const $ =  cheerio.load(html); // Pull the DOM

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