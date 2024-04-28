import { useContext } from "react";
import { countContext } from "./MainComp";

function ComponentC(){
    const count=useContext(countContext);
    return(
        <>
        <div>Component C</div>
        <div>
            Count : {count.countState}
            <button onClick={()=>count.countDispatch({type:"Increment"})}>Increment</button>
            <button onClick={()=>count.countDispatch({type:"Decrement"})}>Decrement</button>
            <button onClick={()=>count.countDispatch({type:"Reset"})}>Reset</button>
            </div>
        </>
    )
}

export default ComponentC;