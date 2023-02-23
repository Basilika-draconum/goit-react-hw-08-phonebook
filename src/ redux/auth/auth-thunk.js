import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginService,
  logoutService,
  registerService,
  token,
} from 'services/authApi';

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
      const accessToken = thunkAPI.getState().token;
      token.set(accessToken);
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
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
