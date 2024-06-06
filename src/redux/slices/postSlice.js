import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    postState: []
  },
  reducers: {
    initPost: (state, action) => {
      state.postState = [];
      if (action.payload) {
        state.postState.push(...action.payload);
      }
    },
    createPost: (state, action) => {
      state.postState.push(action.payload);
    }
  }
});

export const { initPost, createPost } = postSlice.actions;

export default postSlice.reducer;
