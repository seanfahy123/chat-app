import React, { useState, useEffect } from "react";
import InputBar from "./InputBar";
import Message from "./Message";
import axios from "axios";

import openSocket from "socket.io-client";

const ChatWindow = ({ room, username, newMessages }) => {
  const socket = openSocket("http://localhost:8000");
  const [olderMessages, setOlderMessages] = useState([]);

  useEffect(() => {
    (async function loadEarlierMessages() {
      const res = await axios.get(`http://localhost:3000/messages/${room}`);
      setOlderMessages(res.data);
    })();
  }, [room]);

  return (
    <div id="chat-window">
      <div id="messages">
        {olderMessages.map(message => (
          <Message sender={message.sender} key={message._id} />
        ))}
        {newMessages.map(message => (
          <Message />
        ))}
      </div>
      <InputBar />
    </div>
  );
};

export default ChatWindow;
