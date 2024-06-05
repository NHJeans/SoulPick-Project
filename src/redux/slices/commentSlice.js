import { createSlice } from '@reduxjs/toolkit';

const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    commentState: {}
  },
  reducers: {
    createComment: (state, action) => {
      state.commentState = action.payload;
    }
  }
});

export const { createComment } = commentSlice.actions;

export default commentSlice.reducer;
