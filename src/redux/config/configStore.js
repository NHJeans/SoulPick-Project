import { configureStore } from '@reduxjs/toolkit';

const emptyReducer = (state = {}, action) => {
  return state;
};
// store 설정
const store = configureStore({
  reducer: emptyReducer
});
export default store;
