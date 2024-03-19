import { useState } from "react";
function Counter(){
    const [count,setCount] = useState(0);
    function Increment(){
        setCount((count)=>count+1);
    }

    function Decrement(){
        setCount((count)=>count-1);
    }

    function Reset(){
        setCount(count=>count=0);
    }
    return (<>
       <button onClick={Increment}>Increment</button>
       <p>Count : {count}</p>
       <button onClick={Decrement}>Decrement</button>
       <br></br>
       <button onClick={Reset}>Reset</button>
    </>)
}

export default Counter;