import React from "react";

const InputBar = () => {
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
      <button type="button" className="btn btn-primary">
        Share Location
      </button>
    </div>
  );
};

export default InputBar;
