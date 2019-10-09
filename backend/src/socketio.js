const io = require("socket.io")();
const mongoose = require("mongoose");
const Message = require("./models/message");

io.on("connection", socket => {
  console.log("CONNECTED");

  socket.on("join", room => {
    socket.join(room);
  });

  socket.on("sendMessage", async message => {
    console.log("SENDING FROM SERVER");
    message._id = new mongoose.Types.ObjectId();
    console.log(message);
    const messageToSave = new Message(message);
    await messageToSave.save();
    io.to(message.room).emit("message", message);
  });
});

const port = 8000;

io.listen(port);
console.log(`SocketIO server is up on ${port}`);
