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
      const deletedState = state.commentState.filter((comment) => {
        return comment.id !== action.payload;
      });
      state.commentState = deletedState;
    },
    updateComment: (state, action) => {
      const updatedState = state.commentState.find((comment) => comment.id === action.payload.id);
      if (updatedState) {
        updatedState.content = action.payload.content;
      }
    }
  }
});

export const { createComment, deleteComment, updateComment } = commentSlice.actions;

export default commentSlice.reducer;
