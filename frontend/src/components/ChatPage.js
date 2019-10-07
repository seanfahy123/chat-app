import React from "react";
import ChatWindow from "./ChatWindow";
import CurrentUsers from "./CurrentUsers";

const ChatPage = () => {
  return (
    <div id="chatPage">
      <CurrentUsers />
      <ChatWindow />
    </div>
  );
};

export default ChatPage;
