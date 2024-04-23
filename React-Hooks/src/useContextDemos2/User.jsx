import React, { useContext } from "react";
import { nameContext } from "./AppComp";

export const User=()=>{
    const nameVal = useContext(nameContext);
    return(
        <>
        <h2>User</h2>
        {nameVal}
        </>
    )
};