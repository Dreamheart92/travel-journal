import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';
import DestinationHeader from '../../components/DestinationHeader';
import JournalsList from '../../components/JournalsList';
import Sidebar from '../../components/Sidebar';
import style from './index.module.css';
import CreateJournal from '../../components/Sidebar/CreateJournal';
import Search from '../../components/Search';
import FiltersSection from '../../components/Sidebar/FiltersSection';
import useQuery from '../../hooks/useQuery';
import { selectIsAuthenticated } from '../../store/auth/selectors';
import useDestinations from '../../hooks/useDestinations';

export default function Catalogue() {
  const { destination } = useParams();
  const { destinations } = useDestinations();

  const { searchParams, onQuery } = useQuery();

  const isAuthenticated = useSelector(selectIsAuthenticated);

  const currentDestination = destination
    ? destinations.find((destinationFilter) => destinationFilter.name === destination)
    : null;

  return (
    <DefaultLayout>
      <DestinationHeader destination={currentDestination} />
      <div className={style.wrapper}>

        <div className={style['journals-container']}>
          <JournalsList
            onQuery={onQuery}
            destination={destination}
            searchParams={searchParams}
          />
        </div>

        <Sidebar width="20em">

          {isAuthenticated
            && <CreateJournal />}

          <Search
            urlSearch={searchParams.get('search') || ''}
            onQuery={onQuery}
          />

          <FiltersSection />
        </Sidebar>

      </div>
    </DefaultLayout>
  );
}
