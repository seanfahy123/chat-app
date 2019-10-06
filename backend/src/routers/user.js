const express = require("express");
const User = require("../models/user");
const router = new express.Router();

router.get("/", async (req, res) => {
  res.status(200).send("Request made");
});

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send();
  } catch (e) {
    console.log("ERROR CAUGHT", e);
    res.status(500).send();
  }
});

module.exports = router;
