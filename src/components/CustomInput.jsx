import React from "react";
import Form from "react-bootstrap/Form";
export const CustomInput = ({ label, ...rest }) => {
  return (
    <Form.Group className="mb-2">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} />
    </Form.Group>
  );
};
