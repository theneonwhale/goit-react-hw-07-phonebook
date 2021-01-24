import { useEffect } from 'react';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import TotalContacts from './components/TotalContacts/TotalContacts';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Notification from './components/Notification/Notification';
import { useSelector, useDispatch } from 'react-redux';
import { operations, selectors } from 'redux/contacts';

export default function App() {
  const contacts = useSelector(selectors.getContacts);
  const visibleContacts = useSelector(selectors.getVisibleContacts);
  const error = useSelector(selectors.getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phone book">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 && <TotalContacts />}
        {contacts.length > 0 && <Filter />}
        {visibleContacts.length > 0 ? (
          <ContactList />
        ) : (
          <Notification message={'Nothing to show.'} />
        )}
        {error && <Notification message={error.message} />}
      </Section>
    </Container>
  );
}
