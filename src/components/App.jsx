import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 && (
        <ContactList />
      )}
    </>
  );
};
