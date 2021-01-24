import PropTypes from 'prop-types';
import { useState } from 'react';
import Loader from '../Loader/Loader';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, operations } from 'redux/contacts';

export default function ContactListItem({ name, number, id }) {
  const [deleteId, setDeleteId] = useState(0);
  const loading = useSelector(selectors.getLoading);
  const deleting = deleteId === id;
  const dispatch = useDispatch();

  const handleDelete = () => {
    setDeleteId(id);
    dispatch(operations.deleteContact(id));
  };

  return (
    <li className={s.item}>
      <p className={s.contact}>
        {name}: {number}
      </p>
      <button onClick={handleDelete} className={s.button}>
        {loading && deleting ? <Loader /> : 'Remove'}
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
