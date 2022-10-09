var mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  _id: String,
  name: String,
  description: String,
});

module.exports = mongoose.model("Book", bookSchema);
