import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { operations, selectors } from 'redux/contacts';
// import { getContacts } from '../../redux/selectors';
// import operations from '../../redux/operations';
import s from './ContactForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectors.getContacts);

  const contact = { name, number };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
    console.log(dispatch(operations.fetchContacts()));
  }, [dispatch]);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase(),
    )
      ? toast.dark(`🦝 ${name} is already in contacts.`, { autoClose: 3000 })
      : dispatch(operations.addContact(contact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.item}>
          <p className={s.title}>Name</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter name here..."
            className={s.input}
          />
        </label>
        <label className={s.item}>
          <p className={s.title}>Number</p>
          <input
            type="text"
            name="number"
            value={number}
            onChange={handleChange}
            placeholder="Enter number here..."
            className={s.input}
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
      <ToastContainer />
    </>
  );
}