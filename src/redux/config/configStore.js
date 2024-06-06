import { configureStore } from '@reduxjs/toolkit';
import commentSlice from '../slices/commentSlice';
import postSlice from '../slices/postSlice';
import userSlice from '../slices/userSlice';

// store 설정
const store = configureStore({
  reducer: {
    comment: commentSlice,
    user: userSlice,
    post: postSlice
  }
});
export default store;
