import React, { StrictMode, useState } from "react";
import ChatPage from "./components/ChatPage/ChatPage";
import SignupForm from "./components/SignUpPage/SignupForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [room, setRoom] = useState(null);

  return (
    <StrictMode>
      <Router>
        <Switch>
          {isAuthenticated && (
            <Route
              render={() => <ChatPage room={room} username={username} />}
            />
          )}
          <Route
            render={() => (
              <SignupForm
                setAuth={setAuthenticated}
                setRoom={setRoom}
                setUsername={setUsername}
              />
            )}
          />
        </Switch>
      </Router>
    </StrictMode>
  );
}

export default App;
