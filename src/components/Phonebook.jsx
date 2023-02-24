import FormPhonebook from './FormPhonebook/FormPhonebook';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './phonebook.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from ' redux/contacts/contacts-thunk';

const Phonebook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div className={css.main}>
      <h2 className={css.main_title}>Phonebook</h2>
      <FormPhonebook />
      <Filter />
      <ContactsList />
    </div>
  );
};

export default Phonebook;
