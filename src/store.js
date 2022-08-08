import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./components/loginSlice";

export const store = configureStore({
  reducer: { Login: loginSlice },
});
