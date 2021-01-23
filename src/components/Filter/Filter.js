import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from 'redux/contacts';
// import operations from '../../redux/contacts-operations';

import { getFilter } from '../../redux/contacts/selectors';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.filter}>
      <p className={s.title}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={e => dispatch(actions.changeFilter(e.target.value))}
        placeholder="Enter name here..."
        className={s.input}
      />
    </label>
  );
}
