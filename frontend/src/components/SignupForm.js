import React from "react";
import axios from "axios";

const SignupForm = props => {
  async function submit() {
    const res = await axios.get("http://localhost:3000/");
    if (res.status === 200) {
      props.setAuth(true);
    }
  }

  return (
    <div id="formWindow">
      <div className="card signupform">
        <div className="card-body">
          <h4 className="card-title">Sign Up & Join room</h4>
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
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
          <label>Room</label>
          <input
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
