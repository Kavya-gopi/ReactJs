import { useState } from "react"

function ArrCompUpdate(){
    const [item,setItem] = useState([]);
    const [count,setCount] = useState(1);

    function AddItem(){
        const itemName = 'Item'+count;
        setItem((previousState)=>{return [...previousState,itemName]});
        setCount((previousState)=>previousState+1);
    }
    return(
        <>
        <h1>My List Items</h1>
        <button onClick={AddItem}>Add Item</button>
        <ul>
            {item.map((el,index)=><li key={index}>{el}</li>)}
        </ul>
        </>
    )
}
export default ArrCompUpdate;