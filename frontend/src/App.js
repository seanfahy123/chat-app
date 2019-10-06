import React, { StrictMode } from "react";
import Navbar from "./components/Navbar";
import ChatWindow from "./components/ChatWindow";
import SignupForm from "./components/SignupForm";
import ChatPage from "./components/ChatPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    // <div>
    //   <SignupForm />
    //   {/* <Navbar />
    //   <ChatWindow /> */}
    // </div>
    <StrictMode>
      <Router>
        <Switch>
          {/* <Redirect from="/" exact to="/Users" /> */}
          <Route exact path="/Chats" component={ChatPage} />
          <Route component={SignupForm} />
        </Switch>
      </Router>
    </StrictMode>
  );
}

export default App;
