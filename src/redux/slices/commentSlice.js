import { createSlice } from '@reduxjs/toolkit';

const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    commentState: []
  },
  reducers: {
    initComment: (state, action) => {
      state.commentState = [];
      if (action.payload) {
        state.commentState.push(...action.payload);
      }
    },
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

export const { initComment, createComment, deleteComment, updateComment } = commentSlice.actions;

export default commentSlice.reducer;
