import { useState } from "react";
function Color(){
    // const color='Black';
    let [color,setColor]=useState('Blue');
    return(
        <>
        <h1>My Favorite Color is {color}</h1>
        <button onClick={()=>setColor('Black')}>Change Color</button>
        </>
    )
}

export default Color;