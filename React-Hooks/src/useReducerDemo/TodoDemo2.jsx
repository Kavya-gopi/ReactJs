import { useReducer } from "react";
const initialState=[];

function reducer(state,action){
    switch(action.type){
        case "addTask":
            console.log("adding");
            return [...state,{id:state.length+1,tasktitle:action.payload}];
        default:
            return state;
    }
}

function TodoDemo2(){
    const [state,dispatch]=useReducer(reducer,initialState);

    const handleChange=(e)=>{
        if(e.key==="Enter"){
            dispatch({type:"addTask", payload:e.target.value});
        }

    }
    return(
        <>
        <h3>Task List {state.length}</h3>
        <label htmlFor="task">Enter task</label>
        <input type="text" id="task" onKeyDown={(e)=>handleChange(e)}></input>
        <ul>
            {state.map((task)=>(
                   <li key={task.id}>{task.tasktitle}</li>
                ))}
        </ul>
        </>
    )

}

export default TodoDemo2;