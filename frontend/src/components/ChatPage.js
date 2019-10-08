import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import CurrentUsers from "./CurrentUsers";

import openSocket from "socket.io-client";

const ChatPage = ({ room, username }) => {
  const [currentUsers, setcurrentUsers] = useState([]);
  const [newMessages, setNewMessages] = useState([]);

  // const socket = openSocket("http://localhost:8000");

  // socket.emit("test", "this is a test");

  // socket.on("message", message => {
  //   console.log(message);
  //   setNewMessages([...newMessages, message]);
  // });

  // //socket.emit("sendMessage", "this is a test message");

  return (
    <div id="chatPage">
      <CurrentUsers room={room} currentUsers={currentUsers} />
      <ChatWindow room={room} username={username} newMessages={newMessages} />
    </div>
  );
};

export default ChatPage;
