import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SidebarSection from '../Sidebar/SidebarSection';
import style from './index.module.css';

export default function Search(
  {
    onQuery,
    urlSearch,
    isSearching,
    onSearching,
  },
) {
  const [search, setSearch] = useState(urlSearch);

  const debounceQueryTimeout = useRef(null);

  const handleChange = (event) => {
    if (!isSearching) {
      onSearching(true);
    }

    setSearch(event.target.value);
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

Search.propTypes = {
  onQuery: PropTypes.func,
  urlSearch: PropTypes.string,
  isSearching: PropTypes.bool,
  onSearching: PropTypes.func,
};
