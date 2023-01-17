import { configureStore } from '@reduxjs/toolkit';
import MailReducer from '../features/MailSlice';
import UserReducer from "../features/UserSlice";

export const store = configureStore({
  reducer: {
    Mail: MailReducer,  
    User : UserReducer,
  },
});
