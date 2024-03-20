import { useEffect, useState } from "react"

function Timer(){
    const [count,setCount] = useState(1);
    useEffect(()=>{
        console.log('Screen Rendering');
        Count();
        // setTimeout(()=>
        // {return setCount((prevState)=>(prevState+1))},1000)
    });
    function Count(){
        if(count>10){
            setCount(1);
        }
    }
    const increaseCount=()=>{
        setCount((prevState)=>prevState+1);
    }
    return(<>
      <h1>I have rendered {count} times</h1>
      <button onClick={increaseCount}>IncreaseCount</button>
    </>)
}

export default Timer;