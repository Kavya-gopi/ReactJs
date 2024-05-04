import React from "react";

function Product({name,addTocart}){
    console.log("prod1 rendered....")
    return(
        <>
        <p>{name}</p>
        <button onClick={addTocart}>Add to Cart</button>
        </>
    )

};

export default React.memo(Product);