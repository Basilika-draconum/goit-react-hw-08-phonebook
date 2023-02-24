// import axios from 'axios';
import { authApi } from './authApi';
// import { store } from ' redux/store';

// const contactService = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com/contacts',
// });

// axios.interceptors.request.use(function (config) {
//   const token = "store?.getState().session.token";
//   config.headers.Authorization = `Bearer ${token}`;

//   return config;
// });

export const fetchContacts = async () => {
  const { data } = await authApi.get('contacts');
  return data;
};

export const deleteContact = async id => {
  const { data } = await authApi.delete(`contacts/${id}`);
  return data;
};

export const postContact = async newContact => {
  const { data } = await authApi.post('contacts', newContact);
  return data;
};
