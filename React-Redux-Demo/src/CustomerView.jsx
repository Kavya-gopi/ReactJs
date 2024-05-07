import React from "react";
import { useSelector } from "react-redux";
import { deleteCustomer } from "./slices/CustomerSlice";
import { useDispatch } from "react-redux";

function CustomerView(){
    const customers=useSelector((state)=>state.customers);
    const dispatch=useDispatch();

    function deleteHandler(index){
       dispatch(deleteCustomer(index));
    }


    return(
        <>
        <div>
           <h3>Customers List</h3>
            <ul style={{listStyle:"none"}}>
                {customers.map((customer,index)=><li key={index}>{customer} <button onClick={()=>deleteHandler(index)}>Delete</button></li>)}
            </ul>
        </div>
        </>
    )

}

export default CustomerView;