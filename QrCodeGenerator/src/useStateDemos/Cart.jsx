import { useState } from "react"

export const Cart=()=>{
    const [count,setCount] = useState(0);

    const add=()=>{
        setCount(()=>count+1);
    }
    return(
        <>
        <h1>Items Count : {count}</h1>
        <button onClick={add}>{count} Add To Cart</button>
        </>
    )
}