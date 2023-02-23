import { selectContacts } from ' redux/contacts/contactsSelector';

export const selectFilter = state => state.filter;
export const selectFilteredContacts = state => {
  const filter = selectFilter(state);
  const contacts = selectContacts(state);
  return contacts.filter(elem =>
    elem.name.toLowerCase().includes(filter.toLowerCase())
  );
};
