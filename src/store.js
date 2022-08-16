import { configureStore } from "@reduxjs/toolkit";
import { loadState } from "./browserStorage";
import addFormSlice from "./components/addFormSlice";
import loginSlice from "./components/loginSlice";

export const store = configureStore({
  reducer: { login: loginSlice, addFormSlice: addFormSlice },
  preloadedState: loadState(),
});
