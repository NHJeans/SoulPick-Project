import { createSlice } from '@reduxjs/toolkit';

const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    commentState: []
  },
  reducers: {
    createComment: (state, action) => {
      state.commentState.push(action.payload);
    },
    deleteComment: (state, action) => {
      return state;
    }
  }
});

export const { createComment, deleteComment } = commentSlice.actions;

export default commentSlice.reducer;
