import React, { useEffect } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginFaild, loginPending, loginSuccess, logout } from "./loginSlice";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { saveState } from "../browserStorage";

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
          navigate(-2) || navigate("/admin");
        }
      });
  };

  const HandleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const HandlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const HandleLogout = () => {
    dispatch(logout());
    navigate(-1);
  };
  return (
    <div className="bg-gray-200 h-[100vh] pt-20">
      {!loginStore.isAuth ? (
        <div className="w-[30rem] mx-auto bg-white shadow-md rounded-lg p-8">
          <form onSubmit={HandleLogin}>
            <header className="text-3xl mb-4">Login Form</header>
            {loginStore.error !== "" ? <div>{loginStore.error}</div> : ""}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                onChange={HandleEmailChange}
                className="form-input"
                type="email"
                name="email"
                placeholder="Email"
              />

              <label htmlFor="password" className="text-lg">
                Password
              </label>

              <input
                onChange={HandlePasswordChange}
                type="password"
                className="form-input"
                name="password"
                placeholder="Password"
              />
              <div className="flex justify-center gap-4">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
                <input
                  className="btn btn-primary"
                  type="button"
                  value="Signup"
                />
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="w-[30rem] mx-auto bg-white shadow-md rounded-lg p-8">
          <div className="text-2xl text-center w-full">Already logged in</div>
          <div className="flex justify-center mt-4 gap-2">
            <input
              className="btn btn-primary"
              type="button"
              onClick={HandleLogout}
              value="Logout"
            />
            <Link to="/admin">
              <input
                className="btn btn-primary"
                type="button"
                value="Admin Page"
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
