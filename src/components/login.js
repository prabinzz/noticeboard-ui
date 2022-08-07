import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { loginFaild, loginPending, loginSuccess } from "./loginSlice";

const Login = () => {
    const dispatch = useDispatch();
    
  return (
    <div>
        <button onClick={(e)=> dispatch(loginSuccess())} >Click </button>
    </div>
  )
}

export default Login