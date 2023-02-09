import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth_layout_slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
