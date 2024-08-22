import {createSlice} from '@reduxjs/toolkit';


const fetchSlice= createSlice({
    name:"fetching",
    initialState:false,
    reducers:{
        fetchingDone:(state)=>{
            return state=!state
        }
    }
})

export default fetchSlice;
export const {fetchingDone}=fetchSlice.actions;