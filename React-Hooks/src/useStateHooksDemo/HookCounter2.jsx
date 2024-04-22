import React, { useState } from "react";
export const HookCounter2 = () => {
  const [list, setList] = useState({ firstName: "", lastName: "" });
  return (
    <>
      <div>
        Enter First Name:<br></br>
        <input
          type="text"
          value={list.firstName}
          onChange={(e) => setList({ ...list, firstName: e.target.value })}
        />
        <br></br>
        Enter Last Name:<br></br>
        <input
          type="text"
          value={list.lastName}
          onChange={(e) => setList({ ...list, lastName: e.target.value })}
        />
        <br></br>
        {list.firstName}<br></br>
        {list.lastName}
      </div>
    </>
  );
};
