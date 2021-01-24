import s from './TotalContacts.module.css';
import { selectors } from 'redux/contacts';
import { useSelector } from 'react-redux';

export default function TotalContacts() {
  const contacts = useSelector(selectors.getContacts);

  return (
    <div className={s.totalContacts}>
      Contacts in phonebook: <span className={s.total}>{contacts.length}</span>
    </div>
  );
}
