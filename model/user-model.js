var mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  _id: String,
  password: String,
});

module.exports = mongoose.model("User", usersSchema);
