import axios from 'axios';

const contactService = axios.create({
  baseURL: 'https://63f3b110fe3b595e2ee798f2.mockapi.io/contacts',
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
