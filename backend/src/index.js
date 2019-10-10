const app = require("./app");

var http = require("http").Server(app);
var io = require("socket.io")(http);

io.on("connection", socket => {
  socket.on("join", ({ username, room }) => {
    users.addUser(username, room, socket.id);
    socket.join(room);
    io.to(room).emit("presentUsers", users.getUsersInRoom(room));
  });

  socket.on("disconnect", () => {
    const disconnectingUser = users.removeUser(socket.id);
    if (disconnectingUser) {
      io.to(disconnectingUser.room).emit(
        "presentUsers",
        users.getUsersInRoom(disconnectingUser.room)
      );
    }
  });

  socket.on("sendMessage", async message => {
    message._id = new mongoose.Types.ObjectId();
    const messageToSave = new Message(message);
    await messageToSave.save();
    io.to(message.room).emit("message", messageToSave);
  });
});

//require("dotenv").config();

//const app = require("./app");

http.listen(process.env.PORT || process.env.EXPRESS_PORT, "0.0.0.0");
