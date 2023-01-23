import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { Contact } from './Contact';
import { ContactListGroup, СontactСard } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      <ContactListGroup>
        {contacts.map(({ id, name, number }) => (
          <СontactСard key={id}>
            <Contact name={name} number={number} id={id} />
          </СontactСard>
        ))}
      </ContactListGroup>
    </>
  );
};
