import React from "react";
import { Navbar } from "react-bootstrap";

export const AppNavbar = () => (
  <Navbar bg="light" expand="lg" className="mb-3">
    <Navbar.Brand href="#home">Lonley Chat</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  </Navbar>
);
