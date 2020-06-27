import React, { Component } from "react";
import { Col, Form } from "react-bootstrap";

class ChatInput extends Component {
  state = {
    message: "",
  };

  render() {
    return (
      <Form onSubmit={(e) => {
        e.preventDefault();
        this.props.onSubmitMessage(this.state.message);
        this.setState({ message: "" });
      }}>
        <Form.Row className="align-items-center">
          <Col md="12">
            <Form.Control
              className="mb-2"
              placeholder="Первое сообщение и Enter"
              value={this.state.message}
              onChange={(e) => this.setState({ message: e.target.value })}
            />
          </Col>
        </Form.Row>
      </Form>
    );
  }
}

export default ChatInput;
