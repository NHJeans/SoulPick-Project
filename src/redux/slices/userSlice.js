import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      id: '',
      nickname: '',
      profile_img: '',
      email: '',
      provider: ''
    }
  },
  reducers: {
    initUser: (state, action) => {
      const user = action.payload;
      state.user = user;
    },
    updateUser: (state, action) => {
      //업데이트
    }
  }
});

export const { initUser } = userSlice.actions;

export default userSlice.reducer;
