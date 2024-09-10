import {createSlice} from '@reduxjs/toolkit';

const defItemsSlice=createSlice({
    name:"defPostItems",
    initialState:{
      data:[],
      likedItems:[],
      likedCheck:{},
      disLikeCheck:{},
      saved:{},
      savedItems:[],
      searchData:[]
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
          state.searchData=state.searchData.map((item)=>item.userId===postId?
          {...item,reactions: { ...item.reactions, likes: Postlikes-1 }}:item);
          state.likedCheck[postId]=false;
          state.likedItems=state.likedItems.filter((item)=>item.userId!==postId);
        }
        else if(state.disLikeCheck[postId]===true){
          let val=comp.reactions.dislikes;
          state.data=state.data.map((item)=>item.userId===postId?
          {...item,reactions: { ...item.reactions, likes:Postlikes+1 ,dislikes:val-1 }}:item);
          state.searchData=state.searchData.map((item)=>item.userId===postId?
          {...item,reactions: { ...item.reactions, likes:Postlikes+1 ,dislikes:val-1 }}:item);
          state.likedCheck[postId]=true;
          state.disLikeCheck[postId]=false;
          if (!state.likedItems.some((item) => item.userId === postId)) {
            state.likedItems = [comp, ...state.likedItems];
          }
          // state.likedItems=[comp,...state.likedItems];
          
        }
        else {
          state.data=state.data.map((item)=>item.userId===postId?
          {...item,reactions: { ...item.reactions, likes:Postlikes+1 }}:item);
          state.searchData=state.searchData.map((item)=>item.userId===postId?
          {...item,reactions: { ...item.reactions, likes:Postlikes+1 }}:item);
          state.likedCheck[postId]=true;
          if (!state.likedItems.some((item) => item.userId === postId)) {
            state.likedItems = [comp, ...state.likedItems];
          }
        }
      },
      removeLikeItems :(state,action)=>{
        state.likedItems=state.likedItems.filter((item)=>item.userId!==action.payload);
      },
      disLikePost:(state,action)=>{
        const{postId,Postlikes,PostDislikes}=action.payload;
        if(state.disLikeCheck[postId]===true){
          state.data=state.data.map((item)=>item.userId===postId?
          {...item,reactions: {...item.reactions, dislikes: PostDislikes-1 }}:item);
          state.searchData=state.searchData.map((item)=>item.userId===postId?
          {...item,reactions: {...item.reactions, dislikes: PostDislikes-1 }}:item);
          state.disLikeCheck[postId]=false;
        }
        else if(state.likedCheck[postId]===true){
          state.data=state.data.map((item)=>item.userId===postId?
          {...item,reactions: { ...item.reactions, likes:Postlikes-1 ,dislikes:PostDislikes+1 }}:item);
          state.searchData=state.searchData.map((item)=>item.userId===postId?
          {...item,reactions: { ...item.reactions, likes:Postlikes-1 ,dislikes:PostDislikes+1 }}:item);
          state.likedCheck[postId]=false;
          state.disLikeCheck[postId]=true;
          state.likedItems=state.likedItems.filter((item)=>item.userId!==postId);
        }
        else {
          state.data=state.data.map((item)=>item.userId===postId?
          {...item,reactions: { ...item.reactions, dislikes:PostDislikes+1}}:item);
          state.searchData=state.searchData.map((item)=>item.userId===postId?
          {...item,reactions: { ...item.reactions, dislikes:PostDislikes+1}}:item);
          state.disLikeCheck[postId]=true;
          state.likedItems=state.likedItems.filter((item)=>item.userId!==postId);
        }
      },
      savingItems:(state,action)=>{
          const {postId,comp}=action.payload;
          state.saved[postId]=!state.saved[postId];
          if (!state.savedItems.some((item) => item.userId === postId)) {
            state.savedItems = [comp, ...state.savedItems];
          }
      },
      removeSave:(state,action)=>{
        const {postId,comp}=action.payload;
        state.saved[postId]=!state.saved[postId];
        state.savedItems=state.savedItems.filter((item)=>item.userId!==postId);
      },
      likedSavePost:(state,action)=>{
        const{postId,comp,Postlikes}=action.payload;
        if(state.likedCheck[postId]===true){
          state.data=state.data.map((item)=>item.userId===postId?
          {...item,reactions: { ...item.reactions, likes: Postlikes-1 }}:item);
          state.savedItems=state.savedItems.map((item)=>item.userId===postId?
          {...item,reactions: { ...item.reactions, likes: Postlikes-1 }}:item);
          state.likedCheck[postId]=false;
          state.likedItems=state.likedItems.filter((item)=>item.userId!==postId);
        }
        else if(state.disLikeCheck[postId]===true){
          let val=comp.reactions.dislikes;
          state.data=state.data.map((item)=>item.userId===postId?
          {...item,reactions: { ...item.reactions, likes:Postlikes+1 ,dislikes:val-1 }}:item);
          state.savedItems=state.savedItems.map((item)=>item.userId===postId?
          {...item,reactions: { ...item.reactions, likes:Postlikes+1 ,dislikes:val-1 }}:item);
          state.likedCheck[postId]=true;
          state.disLikeCheck[postId]=false;
          if (!state.likedItems.some((item) => item.userId === postId)) {
            state.likedItems = [comp, ...state.likedItems];
          }
          // state.likedItems=[comp,...state.likedItems];
          
        }
        else {
          state.data=state.data.map((item)=>item.userId===postId?
          {...item,reactions: { ...item.reactions, likes:Postlikes+1 }}:item);
          state.savedItems=state.savedItems.map((item)=>item.userId===postId?
          {...item,reactions: { ...item.reactions, likes:Postlikes+1 }}:item);
          state.likedCheck[postId]=true;
          if (!state.likedItems.some((item) => item.userId === postId)) {
            state.likedItems = [comp, ...state.likedItems];
          }
        }
      },
      savedisLikePost:(state,action)=>{
        const{postId,Postlikes,PostDislikes}=action.payload;
        if(state.disLikeCheck[postId]===true){
          state.data=state.data.map((item)=>item.userId===postId?
          {...item,reactions: {...item.reactions, dislikes: PostDislikes-1 }}:item);
          state.savedItems=state.savedItems.map((item)=>item.userId===postId?
          {...item,reactions: {...item.reactions, dislikes: PostDislikes-1 }}:item);
          state.disLikeCheck[postId]=false;
        }
        else if(state.likedCheck[postId]===true){
          state.data=state.data.map((item)=>item.userId===postId?
          {...item,reactions: { ...item.reactions, likes:Postlikes-1 ,dislikes:PostDislikes+1 }}:item);
          state.savedItems=state.savedItems.map((item)=>item.userId===postId?
          {...item,reactions: { ...item.reactions, likes:Postlikes-1 ,dislikes:PostDislikes+1 }}:item);
          state.likedCheck[postId]=false;
          state.disLikeCheck[postId]=true;
          state.likedItems=state.likedItems.filter((item)=>item.userId!==postId);
        }
        else {
          state.data=state.data.map((item)=>item.userId===postId?
          {...item,reactions: { ...item.reactions, dislikes:PostDislikes+1}}:item);
          state.savedItems=state.savedItems.map((item)=>item.userId===postId?
          {...item,reactions: { ...item.reactions, dislikes:PostDislikes+1}}:item);
          state.disLikeCheck[postId]=true;
          state.likedItems=state.likedItems.filter((item)=>item.userId!==postId);
        }
      },
      searchingData: (state, action) => {
        const { val } = action.payload;
        state.searchData = state.data.filter((item) => {
            return item.userId == val || item.tags.some((tag) => tag == val);
        });
    }
    }
})

export default defItemsSlice;
export  const {addDefItems,addItems,deleteItems,likedPost,savedisLikePost,searchingData,
removeLikeItems,disLikePost,savingItems, likedSavePost,removeSave} =defItemsSlice.actions;