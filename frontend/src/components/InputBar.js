import React from "react";

import openSocket from "socket.io-client";

const InputBar = () => {
  const socket = openSocket("http://localhost:8000");
  socket.emit("test", "this is a test");

  socket.on("message", message => {
    console.log(message);
    //setNewMessages([...newMessages, message]);
  });

  //socket.emit("sendMessage", "this is a test message");

  return (
    <div className="form-group" id="inputBar">
      <input
        type="text"
        className="form-control"
        placeholder="Send message"
        id="inputDefault"
      />
      <button type="button" className="btn btn-primary">
        Send
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          socket.emit("sendMessage", "this is the on click message");
        }}
      >
        Share Location
      </button>
    </div>
  );
};

export default InputBar;
