import React from "react";
import { useNavigate } from "react-router-dom";
export const Login=()=>{
    const navigate = useNavigate();

    const handleSubmit=()=>{
        navigate('/dashBoard');
    }
    return <>
    <h1>Login Page</h1>
    <button onClick={handleSubmit}>Login</button>
    </>
}