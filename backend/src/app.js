require("./db/mongoose");

const express = require("express");
const userRouter = require("./routers/user");
const messageRouter = require("./routers/message");

const path = require("path");

const app = express();

require("./socketio");

app.use(express.json());

console.log(path.join(__dirname + "./../../frontend/build/index.html"));

app.use("this has loaded");
app.use(express.static(path.join(__dirname + "./../../frontend/build")));
app.use(userRouter);
app.use(messageRouter);
// app.use(express.static(path.join(__dirname + "./../../frontend/build")));

module.exports = app;
