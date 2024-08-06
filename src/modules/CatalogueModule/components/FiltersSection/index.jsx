import { useSelector } from 'react-redux';
import SidebarSection from '../../../../components/Sidebar/SidebarSection';
import Filter from '../Filter';
import style from './index.module.css';
import { selectDestinations } from '../../../../store/destinations/selectors';

export default function FiltersSection() {
  const { destinations } = useSelector(selectDestinations);

  return (
    <SidebarSection
      heading="Destinations"
    >
      <ul className={style['filters-section']}>
        {destinations.map((destination) => (
          <li key={destination._id}>
            <Filter filter={destination.name} />
          </li>
        ))}
      </ul>
    </SidebarSection>
  );
}
