import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import style from './index.module.css';
import SidebarSection from '../Sidebar/SidebarSection';

export default function Search() {
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
        />
        <FontAwesomeIcon className={style.icon} icon={faMagnifyingGlass} />
      </div>
    </SidebarSection>
  );
}
