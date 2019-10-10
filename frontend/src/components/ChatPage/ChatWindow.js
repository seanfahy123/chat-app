import React, { useState, useEffect, useRef } from "react";
import InputBar from "./InputBar";
import Message from "./Message";
import axios from "axios";

const ChatWindow = ({ room, newMessages, sendMessage }) => {
  const [olderMessages, setOlderMessages] = useState([]);
  const btmDiv = useRef(null);

  useEffect(() => {
    (async function loadEarlierMessages() {
      const res = await axios.get(`http://localhost:3000/messages/${room}`);
      setOlderMessages(res.data);
    })();
  }, [room]);

  useEffect(() => {
    btmDiv.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, [newMessages]);

  return (
    <div id="chat-window">
      <div id="messages">
        {olderMessages.map(message => (
          <Message
            sender={message.sender}
            key={message._id}
            text={message.message}
            createdAt={message.createdAt}
          />
        ))}
        {newMessages.map(message => (
          <Message
            sender={message.sender}
            text={message.message}
            key={message._id}
            createdAt={message.createdAt}
          />
        ))}
        <div ref={btmDiv}></div>
      </div>
      <InputBar sendMessage={sendMessage} />
    </div>
  );
};

export default ChatWindow;
