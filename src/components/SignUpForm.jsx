import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "./CustomInput";
import { toast } from "react-toastify";
import { postNewUser } from "../../helpers/axiosHelper";
import useForm from "../hooks/useForm";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const SignUpForm = () => {
  const { form, setForm, handleOnChange } = useForm({ initialState });
  // const [form, setForm] = useState({});

  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   console.log(name, value);
  //   setForm({ ...form, [name]: value });
  // };

  const fields = [
    {
      label: "Name",
      placeholder: "John Smith",
      required: true,
      type: "text",
      name: "name",
      value: form.name, // to get empty value from initialStae
    },
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
    {
      label: "Confirm Password",
      placeholder: "********",
      required: true,
      type: "password",
      name: "confirmPassword",
      value: form.confirmPassword,
    },
  ];
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword != rest.password) {
      return toast.error("Password does not match. Please try again!");
    }
    // const data = await postNewUser(rest);
    // const { status, message } = await postNewUser(rest);
    const { status, message } = await postNewUser(rest);

    toast[status](message);

    status === "success" && setForm(initialState);
    // console.log(form);
  };
  return (
    <div className="border rounded p-4">
      <h4 className="mb-1">Sign up now!</h4>
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

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
