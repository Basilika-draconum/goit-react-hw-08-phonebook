// import { addContactAction } from ' redux/contacts/contact-slice';
import {
  getContactsThunk,
  postContactThunk,
} from ' redux/contacts/contacts-thunk';
import {
  selectContacts,
  // selectError,
  // selectIsLoading,
} from ' redux/contacts/contactsSelector';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'services/contactsApi';
import css from './formPhonebook.module.scss';

const FormPhonebook = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const actions = { name: setName, phone: setPhone };
  const dispatch = useDispatch();
  const handleChange = e => {
    const { name, value } = e.target;
    actions[name](value);
  };

  const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { name, phone, id: nanoid() };
    if (
      contacts.some(
        item => item.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(postContactThunk(newContact));

    setName('');
    setPhone('');
  };

  return (
    <div className={css.wrapper}>
      <form className={css.formPhonebook} onSubmit={handleSubmit}>
        <label className={css.formLabel} htmlFor="name">
          Name
        </label>
        <input
          className={css.formInput}
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label className={css.formLabel} htmlFor="phone">
          Phone
        </label>
        <input
          className={css.formInput}
          onChange={handleChange}
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default FormPhonebook;
