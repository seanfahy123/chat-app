import React from "react";
import io from "socket.io-client";

import ChatWindow from "./ChatWindow";
import CurrentUsers from "./CurrentUsers";

export default class ChatPage extends React.Component {
  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);

    this.state = {
      endpoint: "http://localhost:3001/",
      socket: io("http://localhost:8000"),
      newMessages: [],
      presentUsers: []
    };
  }

  componentDidMount() {
    this.state.socket.emit("join", {
      room: this.props.room,
      username: this.props.username
    });

    this.state.socket.on("message", message => {
      this.setState({
        ...this.state,
        newMessages: [...this.state.newMessages, message]
      });
    });

    this.state.socket.on("presentUsers", presentUsers => {
      this.setState({
        ...this.state,
        presentUsers
      });
    });
  }

  sendMessage = function sendMessage(message) {
    message.room = this.props.room;
    message.sender = this.props.username;
    this.state.socket.emit("sendMessage", message);
  };

  render() {
    return (
      <div id="chatPage">
        <CurrentUsers
          room={this.props.room}
          presentUsers={this.state.presentUsers}
        />
        <ChatWindow
          room={this.props.room}
          username={this.props.username}
          newMessages={this.state.newMessages}
          sendMessage={this.sendMessage}
        />
      </div>
    );
  }
}
