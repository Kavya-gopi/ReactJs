import {useState} from "react";

export const Users = ()=>{
    const [user,setUser] = useState({name:"Rahini",age:21});

    function handleChange(e){
        setUser({...user,[e.target.name]:e.target.value});
    }
    return(
        <>
        <h3>{user.name}</h3>
        <h3>{user.age}</h3>
        <label htmlFor="userName">Enter your Name:</label>
        <input type="text" placeholder="Enter your name" value={user.name} 
        onChange={handleChange} name="name" id="userName"/>
        <label htmlFor="userAge">Enter your Age:</label>
        <input type="text" placeholder="Enter your age" value={user.age} 
        onChange={handleChange} name="age" id="userAge"/>

        </>
    )
}