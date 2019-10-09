import React from "react";
import moment from "moment";

const Message = ({ sender, text, createdAt }) => {
  console.log(createdAt);
  console.log(moment(createdAt).format("Do, h:mm a"));
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">{sender}</h6>
        <p className="card-text">{text}</p>
        <p className="card-text">{moment(createdAt).format("Do, h:mm a")}</p>
      </div>
    </div>
  );
};

export default Message;
