var mongoose = require("mongoose"); // Require mongoose
var Schema = mongoose.Schema; // Create Schema class

// Source schema - stores information on sources. Name URL and Note
var SourceSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  link: {
    type: String,
    required: true
  },

  prefix: {
    type: String,
    required: true
  },

  genre: {
    type: String,
    required: false
  },

  note: {
    type: String,
    required: false
  }
  

});

var Source = mongoose.model("Source", SourceSchema);
module.exports = Source;  // stores sources.