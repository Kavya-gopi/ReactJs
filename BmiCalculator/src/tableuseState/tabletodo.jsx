import { useState } from "react"

export const TableTodo=()=>{
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [list,setList] = useState([]);

    const add=()=>{
       let addTodo = {
         fname:firstName,
         lname:lastName,
         mail:email
       }

       let updatedTodo = [...list];
       updatedTodo.push(addTodo);
       setList(updatedTodo);
    }

    return(
        <>
        <div className="input-container">
            <label htmlFor="fname">Enter FirstName </label>
            <input type="text" id="fname" value={firstName} 
            onChange={(e)=>setFirstName(e.target.value)} />
            <label htmlFor="lname">Enter LastName </label>
            <input type="text" id="lname" value={lastName}
            onChange={(e)=>setLastName(e.target.value)}/>
            <label htmlFor="mail">Enter Email </label>
            <input type="text" id="mail" value={email}
            onChange={(e)=>setEmail(e.target.value)} />
            <button onClick={add}>Add</button>
        </div>
        <div className="display">
            <table>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item,index)=>{
                        return(
                        <tr key={index}>
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td>{item.mail}</td>
                    </tr>)

                    })}
                    
                </tbody>
            </table>
           
         
        </div>
        
        </>
    )
}