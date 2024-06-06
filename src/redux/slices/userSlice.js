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
      const updatedData = action.payload;
      state.user = { ...state.user, ...updatedData };
    },
    logoutUser: (state) => {
      state.user = {
        id: '',
        nickname: '',
        profile_img: '',
        email: '',
        provider: ''
      };
    }
  }
});
export const { initUser, updateUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
