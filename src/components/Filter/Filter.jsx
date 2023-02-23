import css from './filter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from ' redux/filter/filterSelector';
import { filterContactsAction } from ' redux/filter/filter-slice';

const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <h6 className={css.title}>Find contacts by name</h6>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        defaultValue={filterValue}
        onChange={e => dispatch(filterContactsAction(e.target.value))}
      />
    </div>
  );
};

export default Filter;
