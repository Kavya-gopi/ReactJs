import React,{useState} from "react";

function InputForm(){
    const [firstName,setFirstName]= useState('');
    const [lastName,setLastName] = useState('');

    const handleSubmit=()=>{
        alert(`Hello, ${firstName} ${lastName}`);
    }

   return(
    <>
    <div>
    <label>Enter Your First Name</label>
    <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
    </div>
    <div>
    <label>Enter Your Last Name</label>
    <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
    </div>
    <button onClick={handleSubmit}>Submit</button>
    

    </>
   )
};

export default InputForm;