const express = require("express");
const User = require("../models/user");
const router = new express.Router();

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save(req.body);
    res.send("WORKING", user);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

module.exports = router;
