import React from "react";

const Message = ({ sender }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">{sender}</h6>
        <p className="card-text">
          Message: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation
        </p>
      </div>
    </div>
  );
};

export default Message;
