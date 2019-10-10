const express = require("express");

const app = express();

var https = require("https").Server(app);

var io = require("socket.io")(https);

// vars past

const userRouter = require("./routers/user");
const messageRouter = require("./routers/message");

const path = require("path");

app.use(express.json());

app.use(express.static(path.join(__dirname + "/frontend/build/")));
app.use(userRouter);
app.use(messageRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
});

// app stuff done

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

https.listen(process.env.PORT, () => {
  console.log("listening now");
});

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
