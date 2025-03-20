import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "./CustomInput";
import useForm from "../hooks/useForm.js";
import { userLogin } from "../../helpers/axiosHelper";
import { toast } from "react-toastify";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};
export const LoginForm = () => {
  //Consume ContextAPI
  const { user, setUser } = useUser();

  const { form, handleOnChange } = useForm({ initialState });
  const navigate = useNavigate();

  useEffect(() => {
    user?._id && navigate("/dashboard");
  }, [user?._id, navigate]);
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
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    const pendingResp = userLogin(form);
    toast.promise(pendingResp, {
      pending: "Please wait........!",
    });

    const { status, message, user, accessJWT } = await pendingResp;
    toast[status](message);
    console.log(user, accessJWT);
    setUser(user); // user from pendingResp

    localStorage.setItem("accessJWT", accessJWT);
    // localStorage.setItem("userInfo", JSON.stringify(user));
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
