// import { deleteContactAction } from ' redux/contacts/contact-slice';
import {
  deleteContactThunk,
  getContactsThunk,
} from ' redux/contacts/contacts-thunk';
import { selectFilteredContacts } from ' redux/filter/filterSelector';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './contactsList.module.scss';

const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const deleteIdRef = useRef(null);

  const deleteContact = async id => {
    deleteIdRef.current = id;
    dispatch(deleteContactThunk(id))
      .unwrap()
      .then(() => dispatch(getContactsThunk()));
  };

  const contact = contacts.map(item => {
    return (
      <li key={item.id} className={css.contact}>
        {item.name}: {item.number}
        <button
          type="button"
          className={css.contactBtn}
          onClick={() => {
            deleteContact(item.id);
          }}
        >
          Delete
        </button>
      </li>
    );
  });
  return <ul>{contact}</ul>;
};

export default ContactsList;
