const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const router = new express.Router();

router.get("/", async (req, res) => {
  res.write("successful request");
  res.send();
});

router.post("/users", async (req, res) => {
  console.log(req.body);
  const userExists = await User.findOne({ username: req.body.username });

  try {
    if (userExists) {
      const isMatch = await bcrypt.compare(
        req.body.password,
        userExists.password
      );

      console.log(isMatch);

      if (isMatch) {
        res.status(202).send();
      } else {
        res.status(200).send("User taken");
      }
    } else {
      const user = new User(req.body);
      await user.save();

      res.status(201).send(user);
    }
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
