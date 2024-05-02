import React, { useEffect, useState } from "react";
// import {Button} from '@blueprintjs/core'
export const Table = () => {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newWebsite, setNewWebsite] = useState("");

  const AddUser = () => {
   const name=newName.trim();
   const email=newEmail.trim();
   const website=newWebsite.trim();
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => console.error("An error occurred", error));
  }, []);
  return (
    <>
      <b>HTTP request And Reaponse Demo</b>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>
                <button>Update</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                placeholder="Enter your name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              ></input>
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter your Email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              ></input>
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter your Website"
                value={newWebsite}
                onChange={(e) => setNewWebsite(e.target.value)}
              ></input>
            </td>
            <td>
              <button onClick={AddUser}>Add User</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
