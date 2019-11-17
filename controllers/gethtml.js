/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 
var cheerio = require("cheerio");
getHTML = module.exports();


async function getHTML(html) {
    const {data } = await cheerio.load(html);

}