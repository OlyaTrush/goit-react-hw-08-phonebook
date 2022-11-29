
import { ContactForm } from './form/Form'
import { ContactList } from './contactList/ContactList';
import { Filter } from './Filter/filter';
import { Loader } from './Loader/Loader';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import { Div, Header, List, Section } from './app.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Div>
      <Header>Phonebook</Header>
      <Section>
        <ContactForm />
      </Section>
      <List>Contacts</List>
      {isLoading && !error && <Loader />}
      <Filter />
      <ContactList />
    </Div>
  );
};