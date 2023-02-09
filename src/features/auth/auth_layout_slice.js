
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiHelper } from './../../app/apiHelper';

const initialState = {
  user: {},
  loading: false
};

export const signup = createAsyncThunk(
  'auth/signup',
  async (user) => {
    const response = await apiHelper.post('auth/signup', user)
    return response.data
  }
);

export const login = createAsyncThunk(
  'auth/signin',
  async (user) => {
    const response = await apiHelper.post('auth/signin', user)
    return response.data
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getUser: (state) => {
      const userStr = localStorage.getItem('nexle_user')
      state.user = JSON.parse(userStr)
    },
    logOut: (state) => {
      state.user = {}
      localStorage.removeItem('nexle_user')
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload;
        localStorage.setItem('nexle_user', JSON.stringify(action.payload))
      })
      .addCase(signup.pending, (state) => {
        state.loading = true
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload;
        localStorage.setItem('nexle_user', JSON.stringify(action.payload))
      });
  },
});

export const { getUser, logOut } = authSlice.actions;

export const selectAuthLoading = (state) => state.auth.loading
export const selectUser = (state) => state.auth.user

export default authSlice.reducer