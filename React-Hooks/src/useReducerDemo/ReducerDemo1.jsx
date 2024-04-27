import React, { useReducer } from "react";

export const ReducerDemo1 = () => {
  let initialValue = "name";

  function redFunc(state, action) {
    if (action.type === "updateField") {
      return { initialValue: action.payload };
    } else {
      return state;
    }
  }

  const [state, dispatch] = useReducer(redFunc, { initialValue });
  return (
    <>
      <div>
        <input
          type="text"
          value={state.initialValue}
          onChange={(e) =>
            dispatch({ type: "updateField", payload: e.target.value })
          }
        ></input>
        <p>{state.initialValue}</p>
      </div>
    </>
  );
};
