import { createSlice } from "@reduxjs/toolkit";

const initialState=[];

const userSlice=createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        addUser(state,action){
            state.push(action.payload)
            // console.log(state);
        }
    }

})

export const {addUser}=userSlice.actions;
export default userSlice.reducer