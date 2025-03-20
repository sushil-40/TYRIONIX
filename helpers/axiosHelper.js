import axios from "axios";

const rootApiEP = "http://localhost:8000/api/v1";
const apiProcessor = async ({ method, url, data }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error?.response?.data?.error || error.message,
    };
  }
};

// post new user
export const postNewUser = (data) => {
  const obj = {
    method: "post",
    url: rootApiEP + "/users",
    data,
  };
  return apiProcessor(obj);
};

export const userLogin = (data) => {
  const obj = {
    method: "post",
    url: rootApiEP + "/users/login",
    data,
  };
  return apiProcessor(obj);
};
