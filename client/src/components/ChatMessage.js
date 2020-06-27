import React from "react";
import { Alert } from "react-bootstrap";

export default ({ name, message, colorNum }) => (
  <Alert variant='success'>
    <strong>{name}:</strong> <em>{message}</em>
  </Alert>
);
