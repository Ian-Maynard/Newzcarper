/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

var cheerio = require("cheerio");
var request = require("request");
var Article = require("../models/Article.js");
const Bitly = require('bitlyapi');
var bitly = new Bitly('fd0a57a9269bf1d523ec4bd38c18f0812c444f04'); // Shorten URL

function urlScraper(srce, sURL, urlSwitch, skrapeParm) {

  // urlSwitch (boolean) is for URL scrapes that require their base url as a prefix 
  // srce = name of the website
  // sURL = source of the URL
  // urlSwitch = the string to search for 
  // skrapeparm = the parm being looked for.

  var artNum = 0;

    function titleFix(tie) {
        tie = tie.replace(/\t|\n/g,""); // strip out certain characters
        if (tie.length > 30)  { tie = tie.substring(0, 27); }
        return(srce+": "+tie);  
    } // titleFix

    function bitLink(l) {
        return new Promise((resolve, reject) => {
            if (urlSwitch) {
                l=sURL+l;
            }
            bitly.shorten(l);
            resolve(bitly.shorten(l));
        });
    } // getLink


function writeArt(art) {
    const rekord = new Article(art);
    rekord.save(function(err, doc)  { 
         if (err){
           console.log(err);
            }
        else {
           console.log(doc);
              }
     }); //Write
}

async function comBine(ti, li) {
        try {
                var outPut = {};
                outPut.title = titleFix(ti);
                var sLink = await bitLink(li);
                outPut.link = sLink.data.url;
                writeArt(outPut);
            }
        catch (err) {
                    console.log('Error: ',err.message);
            }
} //comBine

request (sURL,  (error, response, html)  =>
         {
        const $ = cheerio.load(html); // Load html into Cheerio 
                $(skrapeParm).each(function (i, element)  {
                    
                 if (artNum < 5)   {
                 comBine($(this).children("a").text().trim(), $(this).children("a").attr("href"));
                 artNum++;
                 console.log(artNum);
                 }
                 
                },
                function(error) {
                    throw error;
                    }
                );
}); // Request   


} // skraper

module.exports = urlScraper;

function newFunction() {
    return 0;
}
