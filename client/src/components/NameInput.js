import { FormControl, InputGroup } from "react-bootstrap";
import React from "react";

export const NameInput = ({disabled, name, onChange}) => (
  <InputGroup className="mb-3">
    <FormControl
      placeholder="Имя..."
      disabled={disabled}
      value={name}
      onChange={onChange}
    />
  </InputGroup>
);
