import React from "react";
import { UserContext, RoleContext } from "./App1";

function ComponentB() {
  return (
    <>
      <h3>ComponentB</h3>
      <UserContext.Consumer>
        {(user) => {
          return (
            <RoleContext.Consumer>
              {(role) => {
                return (
                  <div>
                    <h3>My Name is {user}</h3>
                    <p>
                      My Job Role is <b>{role}</b>
                    </p>
                  </div>
                );
              }}
            </RoleContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </>
  );
}

export default ComponentB;
