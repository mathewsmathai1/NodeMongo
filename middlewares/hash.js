const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashFunction = function (req, res, next) {
  console.log("REQUEST: ", req);
  let salt = bcrypt.genSaltSync(saltRounds);
  let hash = bcrypt.hashSync(req.body.password, salt);
  // returns hash
  console.log(hash);
  req.body.password = hash;
  next();
};

module.exports = hashFunction;
