import { useState } from "react";

export const UserData=()=>{
    const [userName,setUserName] = useState("Kavya");
    const [userAge,setUserAge] = useState(21);
    return (
        <>
        <h3>{userName}</h3>
        <h3>{userAge}</h3>
        <label htmlFor="username">UserName:</label><br></br>
        <input type="text" id="username" placeholder="Enter UserName" value={userName}
        onChange={(e)=>setUserName(e.target.value)}></input><br></br>
        <label htmlFor="userage">UserAge:</label><br></br>
        <input type="text" id="userage" placeholder="Enter UserAge" value={userAge}
        onChange={(e)=>setUserAge(e.target.value)}></input><br></br>
        </>
    )
}