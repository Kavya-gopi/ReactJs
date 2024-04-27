import React, { useReducer } from "react";

export const ReducerDemo=()=>{
    function reducerFunc(state,action){
        switch(action.type){
            case "increment":
                return {count:state.count+1};
            case "decrement":
                return {count:state.count-1};
            default:
                return state;
            
        }

    }
    const [state,dispatch] = useReducer(reducerFunc,{count:0});
    function increment(){
        dispatch({type:"increment"});
    }
    function decrement(){
        dispatch({type:"decrement"});
    }
    return(
        <>
         <h1>Reducer Demo</h1>
         <button onClick={increment}>Increment</button>
         <p>{state.count}</p>
         <button onClick={decrement}>Decrement</button>
        </>
    )
}