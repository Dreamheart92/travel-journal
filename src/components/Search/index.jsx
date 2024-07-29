import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SidebarSection from '../Sidebar/SidebarSection';
import style from './index.module.css';
import useSearch from '../../hooks/useSearch';

export default function Search({ onQuery }) {
  const { search, isSearching, onSearch } = useSearch();

  const debounceQueryTimeout = useRef(null);

  const handleChange = (event) => {
    onSearch(event.target.value);
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
