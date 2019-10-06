require("dotenv").config();

const express = require("express");
const userRouter = require("./routers/user");

const app = express();

app.use(express.json());
app.use(userRouter);

app.use((req, res, next) => {
  if (req.method === "GET") {
    res.send("GET REQUEST MADE");
  } else {
    next();
  }
});

module.exports = app;
