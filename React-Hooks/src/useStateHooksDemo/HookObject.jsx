import { useState } from "react";

export const HookObject = () => {
  const [nameList, setNameList] = useState({});
  const handleChange=(e)=>{
    let updatedValue = {};
    updatedValue={firstName:e.target.value,lastName:e.target.value}
    setNameList(nameList=>({...nameList,...updatedValue}))
  }

  return (
    <>
      <div>
        Enter First Name:<br></br>
        <input type="text" placeholder="firstName" value={nameList.firstName} onChange={handleChange}></input>
        <br></br>
        Enter Last Name:<br></br>
        <input type="text" placeholder="lastName" value={nameList.lastName} onChange={handleChange}/>
        <br></br>
        {JSON.stringify(nameList)}
        
        
      </div>
    </>
  );
};
