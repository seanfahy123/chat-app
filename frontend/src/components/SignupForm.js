import React from "react";

const SignupForm = () => {
  return (
    <div id="formWindow">
      <div className="card signupform">
        <div className="card-body">
          <h4 className="card-title">Sign Up & Join room</h4>
          {/* <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            id="UsernameInput"
            required
          />
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
          <button className="btn btn-primary" id="signup-button">
            Sign up
          </button> */}

          <form action="/Chats">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Display name"
              id="UsernameInput"
              required
            />
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
            <label>Room</label>
            <input
              type="text"
              className="form-control"
              name="room"
              placeholder="Room"
              required
            />
            <button className="btn btn-primary" id="signup-button">
              Join
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
