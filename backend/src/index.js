const mongoose = require("mongoose");
const Message = require("./models/message");
const users = require("./utils/users");

// io.on("connection", socket => {
//   socket.on("join", ({ username, room }) => {
//     users.addUser(username, room, socket.id);
//     socket.join(room);
//     io.to(room).emit("presentUsers", users.getUsersInRoom(room));
//   });

//   socket.on("disconnect", () => {
//     const disconnectingUser = users.removeUser(socket.id);
//     if (disconnectingUser) {
//       io.to(disconnectingUser.room).emit(
//         "presentUsers",
//         users.getUsersInRoom(disconnectingUser.room)
//       );
//     }
//   });

//   socket.on("sendMessage", async message => {
//     message._id = new mongoose.Types.ObjectId();
//     const messageToSave = new Message(message);
//     await messageToSave.save();
//     io.to(message.room).emit("message", messageToSave);
//   });
// });

// const socketioport = process.env.SOCKETIO_PORT;

// io.listen(socketioport);
// console.log(`SocketIO server is up on ${socketioport}`);

require("./db/mongoose");

// const userRouter = require("./routers/user");
// const messageRouter = require("./routers/message");

// const path = require("path");
// require("./socketio");
// EHRENENE
const express = require("express");
const app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

const userRouter = require("./routers/user");
const messageRouter = require("./routers/message");

const path = require("path");

app.use(express.json());

app.use(express.static(path.join(__dirname + "/frontend/build")));

app.use(userRouter);
app.use(messageRouter);

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

http.listen(process.env.PORT);

// EHUSNFE
// app.use(express.json());

// app.use(userRouter);
// app.use(messageRouter);
// app.use(express.static(path.join(__dirname + "./../../frontend/build")));

// const app = require("./app");
// const expressport = process.env.EXPRESS_PORT;

// app.listen(expressport, () => {
//   console.log(`Express server is up on port ${expressport}`);
// });

// const app = require("./app");

// var http = require("http").Server(app);
// var io = require("socket.io")(http);

// io.on("connection", socket => {
//   socket.on("join", ({ username, room }) => {
//     users.addUser(username, room, socket.id);
//     socket.join(room);
//     io.to(room).emit("presentUsers", users.getUsersInRoom(room));
//   });

//   socket.on("disconnect", () => {
//     const disconnectingUser = users.removeUser(socket.id);
//     if (disconnectingUser) {
//       io.to(disconnectingUser.room).emit(
//         "presentUsers",
//         users.getUsersInRoom(disconnectingUser.room)
//       );
//     }
//   });

//   socket.on("sendMessage", async message => {
//     message._id = new mongoose.Types.ObjectId();
//     const messageToSave = new Message(message);
//     await messageToSave.save();
//     io.to(message.room).emit("message", messageToSave);
//   });
// });

// //require("dotenv").config();

// //const app = require("./app");

// http.listen(process.env.PORT || process.env.EXPRESS_PORT, "0.0.0.0");
