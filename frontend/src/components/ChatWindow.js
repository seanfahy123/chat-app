import React, { useState, useEffect } from "react";
import InputBar from "./InputBar";
import Message from "./Message";
import axios from "axios";

const ChatWindow = ({ room, newMessages, sendMessage }) => {
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
          <Message
            sender={message.sender}
            key={message._id}
            text={message.message}
          />
        ))}
        {newMessages.map(message => (
          <Message
            sender={message.sender}
            text={message.message}
            key={message._id}
          />
        ))}
      </div>
      <InputBar sendMessage={sendMessage} />
    </div>
  );
};

export default ChatWindow;
