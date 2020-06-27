import React, { Component } from "react";
import Chat from "./Screens/Chat";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { AppNavbar } from "./components/AppNavbar";

class App extends Component {
  render() {
    return (
      <Container>
        <AppNavbar />
        <Row className="justify-content-md-center">
          <Col md="3" />
          <Col md="6">
            <Chat />
          </Col>
          <Col md="3" />
        </Row>
      </Container>
    );
  }
}

export default App;
