import { useState } from "react"

export const HookCounter1=()=>{
    const [count,setCount] = useState(0);
    return (
        <>
        <div>
            <button onClick={()=>setCount((prevState)=>prevState+1)}>count</button>
           <p>Count : {count}</p>
        </div>
        </>
    )

}