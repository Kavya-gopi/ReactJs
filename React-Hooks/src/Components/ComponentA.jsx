import {useContext} from "react";
import ComponentB from "./ComponentB";

import { countContext } from "./MainComp";
function ComponentA(){
    const count=useContext(countContext);
    return(
        <>
        <div>
            Count : {count.countState}
            <button onClick={()=>count.countDispatch({type:"Increment"})}>Increment</button>
            <button onClick={()=>count.countDispatch({type:"Decrement"})}>Decrement</button>
            <button onClick={()=>count.countDispatch({type:"Reset"})}>Reset</button>
            <ComponentB/>

        </div>
        </>
    )

}

export default ComponentA;