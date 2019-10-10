import React, { useState } from "react";
import axios from "axios";
import ErrorAlert from "./ErrorAlert";

const SignupForm = ({ setRoom, setUsername, setAuth }) => {
  const [usernameText, setUsernameText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [roomText, setRoomText] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function submit() {
    if (!usernameText || !passwordText || !roomText) {
      setErrorMessage("Ensure a username, password and room are provided");
      setShowError(true);
      return;
    }

    if (passwordText.length < 7) {
      setErrorMessage("Password must have at least 7 characters");
      setShowError(true);
      return;
    }

    setRoom(roomText);
    setUsername(usernameText);
    try {
      const res = await axios.post("http://localhost:3000/users", {
        username: usernameText,
        password: passwordText
      });

      if (res.status === 201 || res.status === 202) {
        setAuth(true);
      } else if (res.status === 200) {
        setErrorMessage("Incorrect password");
        setShowError(true);
      }
    } catch (res) {}
  }

  function onUsernameChange(e) {
    setUsernameText(e.target.value);
  }

  function onRoomChange(e) {
    setRoomText(e.target.value);
  }

  function onPasswordChange(e) {
    setPasswordText(e.target.value);
  }

  return (
    <div id="formWindow">
      <div className="card signupform">
        <div className="card-body">
          <h4 className="card-title">Sign Up / Login & Join room</h4>
          <label>Username</label>
          <input
            autoComplete="off"
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
            autoComplete="off"
            onChange={onPasswordChange}
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
          <label>Room</label>
          <input
            autoComplete="off"
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
        {showError && (
          <ErrorAlert errorMessage={errorMessage} setShowError={setShowError} />
        )}
      </div>
    </div>
  );
};

export default SignupForm;
