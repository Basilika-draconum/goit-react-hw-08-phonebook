import FormPhonebook from './FormPhonebook/FormPhonebook';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './phonebook.module.scss';

const Phonebook = () => {
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
