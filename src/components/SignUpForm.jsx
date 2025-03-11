import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "./CustomInput";
export const SignUpForm = () => {
  const fields = [
    {
      label: "Name",
      placeholder: "John Smith",
      required: true,
      type: "text",
      name: "name",
    },
    {
      label: "Email",
      placeholder: "John@email.com",
      required: true,
      type: "email",
      name: "email",
    },

    {
      label: "Password",
      placeholder: "********",
      required: true,
      type: "password",
      name: "password",
    },
    {
      label: "Confirm Password",
      placeholder: "********",
      required: true,
      type: "password",
      name: "confirmPassword",
    },
  ];
  return (
    <div className="border rounded p-4">
      <h4 className="mb-1">Sign up now!</h4>
      <Form>
        {fields.map((input) => {
          return <CustomInput key={input.name} {...input} />;
        })}

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
