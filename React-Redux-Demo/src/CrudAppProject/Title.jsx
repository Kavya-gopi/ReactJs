import React from "react";
import { useSelector } from "react-redux";

function Title(){
   const {taskList}=useSelector((state)=>state.task);
   return(
    <>
     <h1 className="text-center my-4 text-primary">Task Management App</h1>
     <p className="text-center lead">{`Currently ${taskList.length} task(s) Completed`}</p>
    </>
   )
};

export default Title;