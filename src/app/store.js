import { configureStore } from '@reduxjs/toolkit';
import userDetails from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    app: userDetails,
  },
});
