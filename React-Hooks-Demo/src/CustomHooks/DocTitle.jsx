import React, { useEffect, useState } from "react";
import useDocTitle from "./CustomDocTitle";
function DocTitle(){
    const [count,setCount] = useState(0);
    // useEffect(()=>{
    //     document.title=`Count ${count}`;
    // },[count]);
    useDocTitle(count);
    return(
        <>
        <p>Count : {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )

};
export default DocTitle;