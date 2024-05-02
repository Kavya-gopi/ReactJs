import React from "react";
function Count({text,count}){
    console.log("Age Rendering....")
    return(
        <>
        <p>{text} - {count}</p>
        </>
    )
}

export default React.memo(Count);