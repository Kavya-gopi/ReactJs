import { useState } from "react";
import './UserDetails.css';

export const UserDatas = ()=>{
    const [user,setUser] = useState({
        name:'Malini',
        age:25,
        gender:'Female',
        isMarried:true,
        country:'India',
        bio:'Write About YourSelf'
    });

    const handleChange=(e)=>{
       const name=e.target.name;
    //    console.log(name);
       const value = e.target.type==='checkbox'?e.target.checked:e.target.value;
       setUser({...user,[name]:value});
    }
    return(
        <>
        <table>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{user.age}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>{user.gender}</td>
                </tr>
                <tr>
                    <td>IsMarried</td>
                    <td>{user.isMarried?"Married":"UnMarried"}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>{user.country}</td>
                </tr>
                <tr>
                    <td>Bio</td>
                    <td>{user.bio}</td>
                </tr>
            </tbody>
        </table>
        <form>
            <label htmlFor="nameval">Enter Your Name</label>

            <input type="text" placeholder="Enter your name" value={user.name} name="name"
            onChange={handleChange}/>

            <label htmlFor="ageval">Enter Your Age</label>

            <input type="text" placeholder="Enter your age" value={user.age} name="age"
            onChange={handleChange}/>
            
            <label htmlFor="Male"><input type="radio" value="Male" id="Male" name="gender"
            onChange={handleChange} checked={user.gender=='Male'}/>Male</label>
            
            <label htmlFor="Female"><input type="radio" value="Female" id="Female" name="gender"
            onChange={handleChange} checked={user.gender=='Female'}/>Female</label>
           
            <label htmlFor="isMarried"> <input type="checkbox" id="isMarried" value={user.isMarried} name="isMarried"
            onChange={handleChange} checked={user.isMarried}/>IsMarried</label>

            <label>Select Country</label>
            <select value={user.country} onChange={handleChange} name="country">
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
            </select>

            <textarea col="20px" row="5px" placeholder="Write someThing" name="bio" onChange={handleChange}/>
        </form>
        </>
    )
}