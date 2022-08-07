import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isAuth: false,
    error: ""
}
export const LoginSlice = createSlice({
    name: "Login",
    initialState,
    reducers: {
        loginPending: (state) => {
            state.isLoading = true
        },
        loginSuccess: (state) => {
            state.isLoading = false
            state.isAuth = true
            state.error = ""
        },
        loginFaild: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const {loginPending, loginSuccess, loginFaild} = LoginSlice.actions;

export default LoginSlice.reducer