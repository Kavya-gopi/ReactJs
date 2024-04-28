import React, { useReducer, useState } from "react";

const initialState={
    task:''
}
function reducer(state,action){
    switch(action.type){
        case "addTask":
            return {...state,task:action.payload};
        default:
            return state;
    }
    
}
const TodoListDemo=()=>{
    const [state,dispatch] = useReducer(reducer,initialState);
    const [input,setInput] = useState('');

    return(
        <>
        <div>
            <label>Enter Task</label>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={()=>dispatch({type:"addTask",payload:input})}>Add Task</button>
            <p>{state.task}</p>
           
        </div>
        </>
    )
}

export default TodoListDemo;