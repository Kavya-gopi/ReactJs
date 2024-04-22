import React,{useState,useEffect} from "react";

export const MouseMoveFunc=()=>{
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove",logPosition);
        console.log("Mounting....");
        return()=>{
            console.log("Unmounting....");
            window.removeEventListener("mousemove",logPosition);
        }
    },[])
    const logPosition=(e)=>{
        setX(e.clientX),
        setY(e.clientY)
    }
    return (
        <>
        <div>
            <p>X: {x}</p>
            {/* <br></br> */}
            <p>Y: {y}</p>
           
        </div>
        </>
    )
}