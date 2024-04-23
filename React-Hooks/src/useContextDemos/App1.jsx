import React from "react";
import ComponentA from "./ComponentA";
export const UserContext = React.createContext();
export const RoleContext = React.createContext();
function App1() {
  return (
    <>
      <h1>App Component</h1>
      <UserContext.Provider value={"Kavya"}>
        <RoleContext.Provider value={"Software Developer"}>
          <ComponentA />
        </RoleContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App1;
