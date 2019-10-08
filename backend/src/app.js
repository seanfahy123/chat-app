require("./db/mongoose");

const express = require("express");
const userRouter = require("./routers/user");
const messageRouter = require("./routers/message");

const app = express();

// new stuff
const io = require("socket.io")();

io.on("connection", client => {
  console.log("CONNECTED");
  client.on("test", message => {
    console.log(message);
  });

  client.on("disconnect", () => {
    console.log("A client has left");
  });

  client.on("sendMessage", message => {
    client.broadcast.emit("message", message);
  });
});

const port = 8000;
io.listen(port);
console.log(`SocketIO server is up on ${port}`);
// new stuff

app.use(express.json());
app.use(userRouter);
app.use(messageRouter);

module.exports = app;
