import React,{useState,useEffect} from "react";
export const HookComponent=()=>{
    const [count,setCount] = useState(0);
    useEffect(()=>{
        document.title=`Count App`;
        console.log("Mounting");
    },[])
    return (
        <>
        <div>
          <p>Count:{count}</p>
          <button onClick={()=>setCount(prevState=>prevState+1)}>Increment</button>
        </div>
        </>
    )
}