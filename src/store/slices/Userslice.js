import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
name:"user",
initialState :{
username : "",
password : "",
islogged : false
},

reducers:{
login :(state,action)=>{
    state.username = action.payload.username;
    state.password = action.payload.password;
     state.islogged = true;
},

logout :(state)=>{   
    state. password = "";
    state.username = "";
    state.islogged = false;


},
},
});

export const {login,logout} = userSlice.actions;
export default userSlice.reducer;   