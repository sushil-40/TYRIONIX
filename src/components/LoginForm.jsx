import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "./CustomInput";
import useForm from "../hooks/useForm";

const initialState = {
  email: "",
  password: "",
};
export const LoginForm = () => {
  const { form, setForm, handleOnChange } = useForm({ initialState });

  // const [form, setForm] = useState({});
  const fields = [
    {
      label: "Email",
      placeholder: "John@email.com",
      required: true,
      type: "email",
      name: "email",
      value: form.email,
    },

    {
      label: "Password",
      placeholder: "********",
      required: true,
      type: "password",
      name: "password",
      value: form.password,
    },
  ];
  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm({ ...form, [name]: value });
  // };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className="border rounded p-5">
      <h4 className="mb-1">Sign In now!</h4>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        {fields.map((input) => {
          return (
            <CustomInput
              key={input.name}
              {...input}
              onChange={handleOnChange}
            />
          );
        })}

        <div className="d-grid pt-1">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
