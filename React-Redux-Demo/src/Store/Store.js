import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../Slicescrud/TodoSlice";

export const store=configureStore({
    devTools:true,
    reducer:{
        task:taskReducer

    }
});
