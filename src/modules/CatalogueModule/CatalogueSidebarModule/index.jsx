import Sidebar from '../../../components/Sidebar';
import CreateJournal from '../components/CreateJournal';
import Search from '../../../components/Search';
import FiltersSection from '../components/FiltersSection';

  return (
    <Sidebar width="20em">
      {isAuthenticated
        && <CreateJournal />}

      <Search onQuery={onQuery} />
      <FiltersSection />
    </Sidebar>
  );
}
