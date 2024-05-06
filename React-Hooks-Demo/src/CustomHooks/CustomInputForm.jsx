import React from "react";
import useInput from "./CustomInput";

function CustomInputForm(){
    const [firstName,bindFirstName,resetFirstName] = useInput('');
    const [lastName,bindLastName,resetLastName] = useInput('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    }

    return(
        <>
        <label>FirstName</label>
        <input type="text" {...bindFirstName}></input>
        <label>LastName</label>
        <input type="text" {...bindLastName}></input>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )

};

export default CustomInputForm;