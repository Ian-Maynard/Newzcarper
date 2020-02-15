
var mongoose = require("mongoose"); // Require mongoose
var Schema = mongoose.Schema; // Create Schema class

// Source schema
var SourceSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  link: {
    type: String,
    required: true
  },

  url: {
    type: String,
    required: true
  },

  genre: {
    type: String,
    required: true
  },

  note: {
    type: String,
    required: false
  }
  

});

var Source = mongoose.model("Source", SourceSchema);
module.exports = Source;