import React from "react";
import { useState } from "react";
import CustomerView from "./CustomerView";
import { addCustomer as addCustomerAction } from "./slices/CustomerSlice";
import { useDispatch } from "react-redux";

function CustomerAdd() {
  const [userInput, setUserInput] = useState("");
  const dispatch=useDispatch();

//   const [customers, setCustomers] = useState([]);

  const addCustomer = () => {
    if (userInput) {
    //   setCustomers((prev) => [...prev, userInput]);
    dispatch(addCustomerAction(userInput));
      setUserInput("");
    }
    // console.log(customers);
  };
  return (
    <>
      <h3>Add Customer</h3>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={addCustomer}>Add</button>
      {/* <CustomerView customers={customers}/> */}
    </>
  );
}

export default CustomerAdd;
