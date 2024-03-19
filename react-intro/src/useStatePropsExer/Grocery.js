import { useState } from "react";

function Grocery(){

    const [list,setList] = useState([]);

    // const [input,setInput] = useState('');

    const [count,setCount] = useState(1);

    const listItem = 'Item'+count;

    function AddList(){
         setList((previousState)=>[...previousState,listItem]);
         setCount((previousState)=>previousState+1);
    }

    return(<>
       <h1>My Grocery List</h1>
       <button onClick={AddList}>Add List</button>
       <ul>
        {list.map((e,index)=><li key={index}>{e}</li>)}
       </ul>
      
    </>)
}

export default Grocery;