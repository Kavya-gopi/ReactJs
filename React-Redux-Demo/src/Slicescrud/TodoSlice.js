import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    taskList:[],
    selectedTask:{}
}

const TodoSlice=createSlice({
    name:"TodoList",
    initialState,
    reducers:{
        addTodoList(state,action){
           const id=Math.random()*100;
           let task={...action.payload,id};
           state.taskList.push(task);
        },
        updateTodoList(state,action){
            state.taskList=state.taskList.map((task)=>task.id===action.payload.id?action.payload:task);
        },
        removeTodoList(state,action){
            state.taskList=state.taskList.filter((task)=>task.id!==action.payload.id);
        },
        setSelectedTask(state,action){
            state.selectedTask=action.payload;
        }
    }
})

export const {addTodoList,removeTodoList,updateTodoList,setSelectedTask} = TodoSlice.actions;
export default TodoSlice.reducer;