import React, { Component } from "react";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import { getQuotes } from "../api/getQuotes";
import { NameInput } from "../components/NameInput";

const URL = "ws://localhost:3030";

class Chat extends Component {
  state = {
    name: "",
    messages: [],
    isNameDisbld: false,
  };

  ws = new WebSocket(URL);

  componentDidMount() {
    this.ws.onopen = () => {
      console.log("connected");
    };

    this.ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      this.addMessage(message);
    };

    this.ws.onclose = () => {
      console.log("disconnected");
      this.setState({
        ws: new WebSocket(URL),
      });
    };
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  addMessage = (message) =>
    this.setState((state) => ({ messages: [message, ...state.messages] }));

  sendMessage = (messageVal) => {
    const message = { name: this.state.name, message: messageVal };
    this.ws.send(JSON.stringify(message));
    this.addMessage(message);
  };

  submitMessage = (messageVal) => {
    if (!this.state.name) {
      alert("Не задано имя");
      return;
    }
    if (!messageVal) {
      alert("Напишите сообщение");
      return;
    }
    this.sendMessage(messageVal);
    this.setState({ isNameDisbld: true });
    if (this.timerId) clearInterval(this.timerId);
    this.timerId = setInterval(async () => {
      this.sendMessage(await getQuotes());
    }, 1500);
  };

  render() {
    const { name, isNameDisbld } = this.state;
    return (
      <div>
        <NameInput
          disabled={isNameDisbld}
          name={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <ChatInput
          ws={this.ws}
          onSubmitMessage={(messageString) => this.submitMessage(messageString)}
        />
        {this.state.messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.message}
            name={message.name}
          />
        ))}
      </div>
    );
  }
}

export default Chat;
