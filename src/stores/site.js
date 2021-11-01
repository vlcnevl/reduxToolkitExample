import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    dark: false,
    language:"tr"
}

export const site = createSlice({

    name:"site",
    initialState,

    reducers:{
        DarkMode:(state)=>{
            state.dark=!state.dark
        },
        Language:(state,action)=>{
            state.language = action.payload
        }
    }

})

export const {DarkMode,Language} = site.actions
export default site.reducer