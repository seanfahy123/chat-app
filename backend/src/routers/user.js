const express = require("express");
const User = require("../models/user");
const router = new express.Router();

router.get("/", async (req, res) => {
  res
    .writeHead(200, {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
    })
    .write("successful request");
  res.send();
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

router.get("/users/:username", async (req, res) => {
  const username = req.params.username;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).send();
    }

    res.status(200).send(user);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
