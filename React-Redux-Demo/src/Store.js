import {configureStore} from "@reduxjs/toolkit";
import customerReducer from "./slices/CustomerSlice";
import userReducer from "./slices/UserSlice";

export const store=configureStore({
    devTools:true,
    reducer:{
        customers:customerReducer,
        users:userReducer
    }
}

)