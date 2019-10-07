import React, { StrictMode, useState } from "react";
import ChatPage from "./components/ChatPage";
import SignupForm from "./components/SignupForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  return (
    <StrictMode>
      <Router>
        <Switch>
          {isAuthenticated && <Route render={() => <ChatPage />} />}
          <Route render={() => <SignupForm setAuth={setAuthenticated} />} />
        </Switch>
      </Router>
    </StrictMode>
  );
}

export default App;
