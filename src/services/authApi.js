import axios from 'axios';

const authApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const token = {
  set: token =>
    (authApi.defaults.headers.common.Authorization = `Bearer ${token}`),
  unSet: () => (authApi.defaults.headers.common.Authorization = ''),
};

export const registerService = async credentials => {
  const { data } = await authApi.post('users/signup', credentials);
  return data;
};

export const loginService = async credentials => {
  const { data } = await authApi.post('users/login', credentials);
  return data;
};

export const logoutService = () => {
  token.unSet();
  return authApi.post('users/logout');
};
