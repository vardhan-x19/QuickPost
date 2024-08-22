import { configureStore, createSlice } from '@reduxjs/toolkit';
import defItemsSlice from './defItems';
import fetchSlice from './fetch';
import reactionSlice from './likedItems';

const store = configureStore({
    reducer: {
        defPostItems:defItemsSlice.reducer,
        fetching:fetchSlice.reducer,
        likes :reactionSlice.reducer,
    },
});


export default store;
