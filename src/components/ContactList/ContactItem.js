import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { operations } from 'redux/contacts';

// import actions from '../../redux/actions';
// import operations from '../../redux/operations';

export default function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <p className={s.contact}>
        {name}: {number}
      </p>
      <button
        onClick={() => dispatch(operations.deleteContact(id))}
        className={s.button}
      >
        Remove
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
