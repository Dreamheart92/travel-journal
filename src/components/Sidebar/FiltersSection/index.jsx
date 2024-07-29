import SidebarSection from '../SidebarSection';
import Filter from '../Filter';

import style from './index.module.css';
import useDestinations from '../../../hooks/useDestinations';

export default function FiltersSection() {
  const { destinations } = useDestinations();

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
