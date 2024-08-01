import { useSelector } from 'react-redux';
import Sidebar from '../../../components/Sidebar';
import CreateJournal from '../components/CreateJournal';
import Search from '../../../components/Search';
import FiltersSection from '../components/FiltersSection';
import { selectIsAuthenticated } from '../../../store/auth/selectors';

export default function CatalogueSidebarModule({ onQuery }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <Sidebar width="20em">
      {isAuthenticated
        && <CreateJournal />}

      <Search onQuery={onQuery} />
      <FiltersSection />
    </Sidebar>
  );
}
