import React, { useEffect } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginFaild, loginPending, loginSuccess } from "./loginSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginStore = useSelector((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginPending());
    const data = await axios
      .post("http://localhost:8000/login", { email: email, password: password })
      .catch((e) => {
        if (e.response.data.type === "error") {
          dispatch(loginFaild(e.response.data.message));
          return;
        }
      })
      .then((e) => {
        if (e.data !== undefined && e.data.type === "success") {
          dispatch(loginSuccess({ jwt: e.data.jwt, user: e.data.user }));
          navigate("/admin", { replace: true });
        }
      });
  };

  const HandleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const HandlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="bg-gray-200">
      <div className="w-96 mx-auto bg-red-400 p-8">
        <form onSubmit={HandleLogin}>
          <header className="text-3xl mb-4">Login Form</header>
          {loginStore.error !== "" ? (
            <div className="bg-red-400">{loginStore.error}</div>
          ) : (
            ""
          )}
          <div className="flex flex-col">
            <input
              onChange={HandleEmailChange}
              className="form-input"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              onChange={HandlePasswordChange}
              type="password"
              className="form-input"
              name="password"
              placeholder="Password"
            />
            <div className="flex justify-center gap-4">
              <input className="btn btn-primary" type="submit" value="Login" />
              <input className="btn btn-primary" type="button" value="Signup" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
