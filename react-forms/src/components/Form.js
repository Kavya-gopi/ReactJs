import '../App.css'
import { useState } from "react"
function MyForm(){
    // const [name,setName] = useState('');
    // const [age,setAge] = useState('');
    // const [email,setEmail] = useState('');
    // const [phoneno,setPhoneno] = useState('');
    // console.log('currentState',name,age,email,phoneno);

    const [inputs,setInputs] = useState({});

    const handleChange=(e)=>{
        const value = e.target.value
        const name= e.target.name
        setInputs((prevState)=>{
            return {
            ...prevState,[name]:value
            }
        })
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('current state',inputs);

    }

    return(<>
       <form onSubmit={handleSubmit}>
        <label>Enter your Name: <input type="text" name="name" onChange={handleChange}/></label>
        <br></br>
        <label>Enter your Age: <input type="text" name="age" onChange={handleChange}/></label>
        <br></br>
        <label>Enter your Email: <input type="text"name="email" onChange={handleChange}/></label>
        <br></br>
        <label>Enter your PhoneNo: <input type="text" name="phone" onChange={handleChange}/></label>
        <br></br>
        <input type="submit" value="Submit"/>
       </form>
    </>)
    
}

export default MyForm;