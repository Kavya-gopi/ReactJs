import React, { createContext, useReducer } from "react";
import ComponentA from "./ComponentA";
const initialState = 0;
export const countContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};
function MainComp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <countContext.Provider value={{countState:state,countDispatch:dispatch}}>
        <ComponentA />
      </countContext.Provider>
    </>
  );
}

export default MainComp;
