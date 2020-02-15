
var mongoose = require("mongoose"); // Require mongoose
var Schema = mongoose.Schema; // Create Schema class

// Article schema
var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  // link is a required string
  link: {
    type: String,
    required: true
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;