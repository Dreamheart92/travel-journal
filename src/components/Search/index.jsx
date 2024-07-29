import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SidebarSection from '../Sidebar/SidebarSection';
import style from './index.module.css';
import { selectSearch } from '../../store/search/selectors';
import { searchActions } from '../../store/search';

export default function Search({ onQuery }) {
  const dispatch = useDispatch();
  const { search, isSearching } = useSelector(selectSearch);

  const debounceQueryTimeout = useRef(null);

  const handleChange = (event) => {
    dispatch(searchActions.setSearch({ search: event.target.value }));
  };

  useEffect(() => {
    if (isSearching) {
      debounceQueryTimeout.current = setTimeout(() => {
        onQuery('search', search);
      }, 500);
    }

    return () => {
      if (isSearching && debounceQueryTimeout.current) {
        clearTimeout(debounceQueryTimeout.current);
      }
    };
  }, [search]);

  return (
    <SidebarSection
      heading="Search"
    >
      <div className={style['search-wrapper']}>
        <input
          className={style.search}
          type="text"
          id="search"
          name="search"
          placeholder="Search journals..."
          value={search}
          onChange={handleChange}
        />
        <FontAwesomeIcon className={style.icon} icon={faMagnifyingGlass} />
      </div>
    </SidebarSection>
  );
}
