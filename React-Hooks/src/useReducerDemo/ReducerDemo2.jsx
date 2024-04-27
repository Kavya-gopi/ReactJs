import React, { useReducer } from "react";

function ReducerDemo2() {
  const initialState = {
    count: 0,
  };

  function init(initialState) {
    return initialState;
  }

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };

      case "decrement":
        return { count: state.count - 1 };

      case "reset":
        return { count: 0 };
        
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState, init);
  return (
    <>
      <div>
        <p> Count : {state.count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </>
  );
}

export default ReducerDemo2;
