import React, { useState } from "react";
import axios from "axios";

const SignupForm = ({ setRoom, setUsername, setAuth }) => {
  const [usernameText, setUsernameText] = useState("");
  const [roomText, setRoomText] = useState("");

  async function submit() {
    setRoom(roomText);
    setUsername(usernameText);
    const res = await axios.get("http://localhost:3000/");
    if (res.status === 200) {
      setAuth(true);
    }
  }

  function onUsernameChange(e) {
    setUsernameText(e.target.value);
  }

  function onRoomChange(e) {
    setRoomText(e.target.value);
  }

  return (
    <div id="formWindow">
      <div className="card signupform">
        <div className="card-body">
          <h4 className="card-title">Sign Up & Join room</h4>
          <label>Username</label>
          <input
            onChange={onUsernameChange}
            type="text"
            className="form-control"
            name="username"
            placeholder="Username"
            id="UsernameInput"
            required
          />
          <label>Password</label>
          <input
            onChange={onUsernameChange}
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
          <label>Room</label>
          <input
            onChange={onRoomChange}
            type="text"
            className="form-control"
            name="room"
            placeholder="Room"
            required
          />
          <button
            className="btn btn-primary"
            id="signup-button"
            onClick={submit}
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
