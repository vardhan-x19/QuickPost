import {createSlice} from '@reduxjs/toolkit';


const reactionSlice= createSlice({
    name:"likes",
    initialState:[],
    reducers:{
        addliked:(state,action)=>{
            return state=[action.payload,...state];
        },
        removeFromLikes:(state,action)=>{
            return state=state.filter((item)=>item.userId!=action.payload);
        },
    }
})

export default reactionSlice;
export const {addliked,removeFromLikes}=reactionSlice.actions;