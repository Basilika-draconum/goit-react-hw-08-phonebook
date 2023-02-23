import axios from 'axios';

const contactService = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/contacts',
});

export const fetchContacts = async () => {
  const { data } = await contactService.get('');
  return data;
};

export const deleteContact = async id => {
  const { data } = await contactService.delete(id);
  return data;
};

export const postContact = async newContact => {
  const { data } = await contactService.post('', newContact);
  return data;
};
