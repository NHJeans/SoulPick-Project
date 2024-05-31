import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {}
});

export default commentSlice;
