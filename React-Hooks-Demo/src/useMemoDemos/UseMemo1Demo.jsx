import React, { useMemo, useState } from "react";

//useMemo is used for performance optimization for every render it will render only the dependenciess

const UseMemo1Demo=()=>{
    const [number,setNumber]=useState(0);
    const [dark,setDark]=useState(false);
    const doubleNumber=useMemo(()=>{
        return slowFunction(number);
    },[number])
    
    const themestyles={
        backgroundColor:dark?"black":"white",
        color:dark?"white":"black"

    }

    return(
        <>
        <div>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={()=>setDark(curr=>!curr)}>Toggle Theme</button>
            <div style={themestyles}>{doubleNumber}</div>

        </div>
        </>
    )
}

export default UseMemo1Demo;

function slowFunction(num){
    for(let i=0;i<1000000000;i++){}
    return num*2;
}