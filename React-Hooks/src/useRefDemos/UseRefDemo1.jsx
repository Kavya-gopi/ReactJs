import React,{useState,useRef, useEffect} from "react";

function UseRefDemo1(){
    const inputRef=useRef();
    const btnRef=useRef();

    useEffect(()=>{
        inputRef.current.style.borderColor="blue";
        inputRef.current.style.padding="10px";
    })

    const handleOver=()=>{
        console.log(btnRef.current);
        btnRef.current.style.padding="5px";

    }

    const handleOut=()=>{
       console.log(btnRef.current);
       btnRef.current.style.padding="2px";
    }

    return (
        <>
            <label>Enter your name : </label>
            <input type="text" ref={inputRef}/>
            <br></br>
            <button ref={btnRef} onMouseOver={()=>handleOver()} onMouseOut={()=>handleOut()}>Add User</button>
            <br></br>
            <button ref={btnRef} onMouseOver={()=>handleOver()} onMouseOut={()=>handleOut()}>Delete User</button>
        </>
    )

};

export default UseRefDemo1;