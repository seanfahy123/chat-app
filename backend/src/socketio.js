const io = require("socket.io")();
const mongoose = require("mongoose");

io.on("connection", socket => {
  console.log("CONNECTED");

  socket.on("join", room => {
    socket.join(room);
  });

  socket.on("sendMessage", message => {
    console.log("SENDING FROM SERVER");
    message._id = new mongoose.Types.ObjectId();
    io.to(message.room).emit("message", message);
  });
});

const port = 8000;

io.listen(port);
console.log(`SocketIO server is up on ${port}`);
