import React from "react";
import { useParams } from "react-router-dom";
export const User = ()=>{
    const {id}=useParams();
    return <>
    <h1>User Page</h1>
    <p>User Id <b>{id}</b></p>
    </>
}