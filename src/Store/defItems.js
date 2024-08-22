import {createSlice} from '@reduxjs/toolkit';

const defItemsSlice=createSlice({
    name:"defPostItems",
    initialState:{
      data:[],
      likedItems:[],
      likedCheck:{}
    },
    reducers:{
      addDefItems:(state,action)=>{
        state.data=action.payload;
      },
      addItems :(state,action)=>{
        state.data=[action.payload,...state.data];
      },
      deleteItems :(state,action)=>{
         state.data=state.data.filter((item)=>item.userId!=action.payload);
      },
      likedPost :(state,action)=>{
        const{postId,comp,Postlikes}=action.payload;
        if(state.likedCheck[postId]===true){
          state.data=state.data.map((item)=>item.userId===postId?
          {...item,reactions: { ...item.reactions, likes: Postlikes-1 }}:item);
          state.likedCheck[postId]=false;
          state.likedItems=state.likedItems.filter((item)=>item.userId!==postId);
        }
        else {
          state.data=state.data.map((item)=>item.userId===postId?
          {...item,reactions: { ...item.reactions, likes:Postlikes+1 }}:item);
          state.likedCheck[postId]=true;
          state.likedItems=[comp,...state.likedItems];
        }
      },
      removeLikeItems :(state,action)=>{
        state.likedItems=state.likedItems.filter((item)=>item.userId!==action.payload);
      },
      disLikePost:(state,action)=>{
        const{postId,comp,PostDislikes}=action.payload;
        if(state.likedCheck[postId]===true){
          state.data=state.data.map((item)=>item.userId===postId?
          {...item,reactions: { dislikes: PostDislikes+1 }}:item);
          state.likedCheck[postId]=false;
          state.likedItems=state.likedItems.filter((item)=>item.userId!==postId);
        }
        else {
          state.data=state.data.map((item)=>item.userId===postId?
          {...item,reactions: { ...item.reactions, likes:PostDislikes-1}}:item);
          state.likedCheck[postId]=true;
          state.likedItems=[comp,...state.likedItems];
        }
      }
    }
})

export default defItemsSlice;
export  const {addDefItems,addItems,deleteItems,likedPost,removeLikeItems} =defItemsSlice.actions;