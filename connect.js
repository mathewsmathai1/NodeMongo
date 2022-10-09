const mongoose = require("mongoose");
//`mongodb://172.17.0.2:27017/testExtensions`
const url = `mongodb://localhost:27017/some_db`;

const connectMongoose = async () => {
  try {
    await mongoose.connect(url);
    console.log("connected");
  } catch (error) {
    console.log(error, "while connect mongoose");
  }
};

module.exports = connectMongoose;
