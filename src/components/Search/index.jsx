import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SidebarSection from '../Sidebar/SidebarSection';
import style from './index.module.css';

export default function Search() {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

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
