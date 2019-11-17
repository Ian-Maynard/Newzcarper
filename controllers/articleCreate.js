/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

function articleCreat(srce, url, title, link, articles) {

      title = title.replace(/\t|\n/g, ""); // strip out certain characters
      title = title.trim(); // Trim Title

          if (title.length > 65) {
            title = title.substring(0, 64); // constrain length of title
          }
        // To create shareable URL - Implement bitly here. 
                  var article = new Article();
                      article.source = srce;
                      article.title = title;
                      article.link = link;
        return(article);
}