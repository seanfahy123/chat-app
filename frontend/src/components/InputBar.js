import React, { useState } from "react";

const InputBar = ({ sendMessage }) => {
  const [Message, setMessage] = useState("");

  const onSubmit = () => {
    sendMessage({ message: Message });
    setMessage("");
  };

  const onChange = e => {
    setMessage(e.target.value);
    console.log(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="form-group">
      <form onSubmit={handleFormSubmit} id="inputBar">
        <input
          type="text"
          className="form-control"
          placeholder="Send message"
          id="inputDefault"
          onChange={onChange}
          value={Message}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={onSubmit}
          id="submitButton"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default InputBar;
