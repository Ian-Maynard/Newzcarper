/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

var ArticleSchema = new Schema({
    source: {
        type: String,
        required: true
    },
    title: {
      type: String,
      required: true
    },
    // link is a required string
    link: {
      type: String,
      required: true
    },
    note: {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
  });

  