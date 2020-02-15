/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

const Bitly = require('bitlyapi');
var bitly = new Bitly('fd0a57a9269bf1d523ec4bd38c18f0812c444f04'); // Shorten URL

var cheerio = require("cheerio");
var request = require("request");
var longLink='https://www.cnn.com/2020/02/01/us/leila-janah-obit-trnd/index.html';
var shortLink="";


function getBit(link){
     return new Promise((resolve, reject) => {
          console.log('Retreving shortened link from bitly...');
          resolve(bitly.shorten(link));
     });
}

async function dotheThing(link){
     try {
          const el = await getBit(link);
          console.log(el.data.url);
     }
     catch (err) {
          console.log('Error ',err.message);
     }
}

dotheThing(longLink);