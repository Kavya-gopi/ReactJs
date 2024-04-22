import React, { useState, useEffect } from "react";
function UseEffectDemo1() {
  const [num1, setNum1] = useState(100);

  // useEffect(()=>{
  //     setNum1(200);
  //     console.log("Mounting.....");
  // },[])//it will change and update the value on each rendering

//   useEffect(() => {
//     setNum1(200);
//   }, [num1]); 
  
  //it will change the value but after useEffect runs it will set the value using setNum
  //function and the value will be the same

  useEffect(() => {
    setNum1(200);
    console.log("Rendering");
  }); 

  console.log("Num1", num1);
  const add = () => {
    setNum1(num1 + 1);
  };
  return (
    <>
      <div>
        <p>{num1}</p>
        <button onClick={add}>Add</button>
      </div>
    </>
  );
}

export default UseEffectDemo1;
