const express = require("express");
const router = express.Router();
const userSchema = require("../model/user-model");
const hashFunction = require("../middlewares/hash");

router.post("/create", async (req, resp) => {
  console.log("REQUEST BODY IN CREATE: ", req.body);
  const body = req.body;
  try {
    const user = new userSchema(body);
    const data = await user.save();

    return resp.json(data);
  } catch (error) {
    console.log(error, body);
    return resp.json({ error: "something went wrong" });
  }
});

router.get("/get", async (req, resp) => {
  try {
    console.log(req.query, req.query["_id"]);
    const findUser = await userSchema.findOne({ _id: req.query["_id"] });
    if (findUser) {
      return resp.json(findUser);
    }
    return resp.json({ msg: "user not found" });
  } catch (error) {
    console.log(error);
    return resp.json({ error: "something went wrong" });
  }
});

router.get("/get1", async (req, resp) => {
  console.log("IN LOOP");
  resp.end("HELLO");
  while (true) {}
});

module.exports = router;
