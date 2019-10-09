import React from "react";
import User from "./User";

const CurrentUsers = ({ room, presentUsers }) => {
  return (
    <div id="currentUsers">
      <h1>Room: {room}</h1>
      <div id="seperatingDiv"></div>
      <h2>Active users:</h2>
      <div id="presentUsers">
        {presentUsers.map(user => (
          <User username={user.username} key={user.ID} />
        ))}
      </div>
    </div>
  );
};

export default CurrentUsers;
