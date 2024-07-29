import Sidebar from '../../../components/Sidebar';
import CreateJournal from '../../../components/Sidebar/CreateJournal';
import Search from '../../../components/Search';
import FiltersSection from '../../../components/Sidebar/FiltersSection';

export default function CatalogueSidebarModule({ isAuthenticated, onQuery }) {
  return (
    <Sidebar width="20em">
      {isAuthenticated
        && <CreateJournal />}

      <Search onQuery={onQuery} />
      <FiltersSection />
    </Sidebar>
  );
}
