import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../slices/UserSlice";


function UserDetails(){
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName]=useState('');
    const dispatch=useDispatch();
    const users=useSelector((state)=>state.users);


    const addUserBtn=()=>{
        if(firstName && lastName){
           dispatch(addUser(firstName,lastName))
        }
    }
    return(
        <>
        <div>
        <label htmlFor="fname">Enter Your firstName</label>
         <input type="text" id="fname" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
        </div>
        <div>
        <label htmlFor="lname">Enter Your LastName</label>
         <input type="text" id="lname" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
        </div>
        <button onClick={addUserBtn}>Add user</button>
        <ul>
            {users.map((user,index)=><li key={index}>{user}</li>)}
        </ul>

        </>
    )

};

export default UserDetails;