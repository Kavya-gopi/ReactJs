import { useState } from "react"

function Input(){

    const [inputText,setInputText] = useState('');
    const [list,setList] = useState([]);

    function Add(){
       
        setList((prevState)=>[...prevState,inputText]);
    }

    const handleChange=(e)=>{
        setInputText(e.target.value)
    }

    return (<>

      <input type="text" onChange={handleChange} value={inputText}></input>
      <button onClick={Add}>Add</button>
      <ul>
        {list.map((e,index)=><li key={index}>{e}</li>)}
      </ul>
    
    </>)
}

export default Input;