import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  currentUsersService,
  loginService,
  logoutService,
  registerService,
  token,
} from 'services/authApi';
// import { omit } from 'lodash';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentionals, thunkAPI) => {
    try {
      const data = await registerService(credentionals);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const data = await loginService(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const accessToken = thunkAPI.getState().auth.token;
      if (!accessToken) return thunkAPI.rejectWithValue('There is no token');
      token.set(accessToken);
      const data = await currentUsersService();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await logoutService();
      token.unSet();
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
