import React, { useState, useEffect } from "react";
import InputBar from "./InputBar";
import Message from "./Message";
import axios from "axios";

const room = 40;

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  async function loadEarlierMessages() {
    const res = await axios.get(`http://localhost:3000/messages/${room}`);
    setMessages(res.data);
  }

  useEffect(() => {
    loadEarlierMessages();
  }, []);

  return (
    <div id="chat-window">
      <div id="messages">
        {messages.map(message => (
          <Message sender={message.sender} key={message._id} />
        ))}
      </div>
      <InputBar />
    </div>
  );
};

export default ChatWindow;
