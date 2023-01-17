import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
  name: 'User',
  initialState:{
    User:null
  },
  reducers: {

    login:(state,action) => {
      state.selectedUser = action.payload;
    },

    logout: (state) => {
      state.User = null;
    },
    
  },

});

export const { login , logout } = UserSlice.actions;

export const selectUser = (state) => state.User.User;

export default UserSlice.reducer;