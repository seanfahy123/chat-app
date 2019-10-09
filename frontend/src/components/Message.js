import React from "react";

const Message = ({ sender, text }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">{sender}</h6>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Message;
