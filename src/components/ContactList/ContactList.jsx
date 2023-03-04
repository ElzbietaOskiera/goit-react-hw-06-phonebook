import css from './ContactList.module.css'
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';
import { ContactListItem } from './ContactListItem/ContactListItem';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterContactItem = () => {
    const normalizedFilter = filter.toLowerCase();
    const filterItem = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
    return filterItem;
  };

  const visibleContacts = filterContactItem();



  return (
    <ul className={css.ul}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem
          id={id}
          name={name}
          number={number}
          key={id}
        />
      ))}
    </ul>
  );
};