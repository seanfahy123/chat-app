require("./db/mongoose");

const express = require("express");
const userRouter = require("./routers/user");
const messageRouter = require("./routers/message");

const app = express();

require("./socketio");

app.use(express.json());
app.use(userRouter);
app.use(messageRouter);

module.exports = app;
