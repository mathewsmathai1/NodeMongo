const express = require("express");
const app = express();
const mongooseConnect = require("./connect");
const userSchema = require("./model/user-model");
const users = require("./routes/user-routes");
(async () => {
  mongooseConnect();
})();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//console.log(users);

app.get("/hello", (request, response, next) => {
  console.log("HELLO");
  next();
  //response.send("HELLO");
});

app.get("/hello", (request, response) => {
  console.log("WORLD");
  response.send("WORLD");
});

app.use("/users", users);
//POST on localhost:3001/users/create

app.listen(3001);
