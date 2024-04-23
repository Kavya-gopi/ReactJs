import React, { createContext, useState } from "react";
import { Users } from "./Users";
export const nameContext = createContext();
function AppComp() {
    const [name,setName]=useState('');
  return (
    <>
      <nameContext.Provider value={name}>
        <h1>App Component</h1>
        <input type="text" placeholder="Enter your fullName" value={name} onChange={e=>setName(e.target.value)} />
        <Users />
      </nameContext.Provider>
    </>
  );
}

export default AppComp;
