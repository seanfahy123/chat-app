import React from "react";
import moment from "moment";

const Message = ({ sender, text, createdAt }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">
          {sender}, {moment(createdAt).format("Do, h:mm a")}
        </h6>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Message;
