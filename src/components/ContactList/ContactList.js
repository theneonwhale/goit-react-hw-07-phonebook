import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import { selectors } from 'redux/contacts';

// import { getVisibleContacts } from '../../redux/selectors';

export default function ContactList() {
  const { contacts } = useSelector(selectors.getVisibleContacts);
  console.log('list', contacts);
  return (
    <ul className={s.contacts}>
      {contacts.map(({ name = 'anonymous', number = 'unknown', id = 0 }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};
