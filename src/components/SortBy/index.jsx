import useSearch from '../../hooks/useSearch';
import style from './index.module.css';
import SidebarSection from '../Sidebar/SidebarSection';

export default function SortBy({ onQuery }) {
  const { sortBy, sortByOptions, onSortBy } = useSearch();

  const handleSelect = (event) => {
    const { value } = event.target;
    const selectedOptionId = event.target.selectedOptions[0].id;
    onSortBy({ normalized_name: selectedOptionId, name: value });
    onQuery('sortBy', value);
  };

  );
}
