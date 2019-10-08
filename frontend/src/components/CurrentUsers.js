import React from "react";

const CurrentUsers = ({ room }) => {
  return (
    <div id="currentUsers">
      <h1>Room: {room}</h1>
      <div id="seperatingDiv"></div>
      <h2>Active users:</h2>
    </div>
  );
};

export default CurrentUsers;
