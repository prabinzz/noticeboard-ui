import { configureStore } from "@reduxjs/toolkit";
import { loadState } from "./browserStorage";
import loginSlice from "./components/loginSlice";

export const store = configureStore({
  reducer: { login: loginSlice },
  preloadedState: loadState(),
});
