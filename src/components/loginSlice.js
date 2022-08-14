import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  error: "",
  jwt: "",
  user: {},
};
export const LoginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.jwt = action.payload.jwt;
      state.user = action.payload.user;
      state.error = "";
    },
    loginFaild: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = "";
      state.jwt = "";
      state.user = {};
    },
  },
});

export const { loginPending, loginSuccess, loginFaild, logout } =
  LoginSlice.actions;

export default LoginSlice.reducer;
