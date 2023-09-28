import { createSlice } from "@reduxjs/toolkit";
const initialState={
    name:"Md Lanju Mia",
    email:"lanju@gmail.com"
}
const userSlice=createSlice({
    name:"userSlice",
    initialState,
    reducers:{

    }
})

export default userSlice.reducer;