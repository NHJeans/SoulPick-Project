import { configureStore } from '@reduxjs/toolkit';
import commentSlice from '../slices/commentSlice';

// store 설정
const store = configureStore({
  reducer: {
    comment: commentSlice
  }
});
export default store;
