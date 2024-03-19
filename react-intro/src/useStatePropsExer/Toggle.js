import { useState } from "react";

function Toggle(){
    const [isLightsOn,setLightsOn] = useState(false);
    const handleChange=()=>{
        setLightsOn(!isLightsOn);
    }
    return (<>
       Is Light On or off?
       <br></br>
      <p>{isLightsOn?'On':'Off'}</p>
      <button onClick={handleChange}>Toggle Me!</button>
    </>)
 }

export default Toggle;