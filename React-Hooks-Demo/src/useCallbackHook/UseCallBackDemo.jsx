import React, { useCallback, useState } from "react";
import Product from "./Product";

function UseCallBackDemo(){
    const [count,setCount] = useState(0);
    const [products,setProducts] = useState(["prod1","prod2"]);
    const [cart,setCart]=useState(0);

    const addTocart=useCallback(()=>{
        setCart(cart+1);
    },[cart]);
    return(
        <>
        <h3>Count : {count}</h3>
        <button onClick={()=>setCount(count+1)}>Count Increment</button>
        <p>Cart : {cart}</p>
        <div>
            {products.map((prod,index)=>{
                return <Product name={prod} key={index} addTocart={addTocart}/>
            })}
        </div>
        </>
    )

};

export default UseCallBackDemo;