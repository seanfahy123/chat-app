import React, { useState } from "react";

const InputBar = ({ sendMessage }) => {
  const [Message, setMessage] = useState("");
  return (
    <div className="form-group" id="inputBar">
      <input
        type="text"
        className="form-control"
        placeholder="Send message"
        id="inputDefault"
        //value={Message}
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          sendMessage({ message: "this is theexample messgge", b: 2 });
        }}
      >
        Send
      </button>
    </div>
  );
};

export default InputBar;
