import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import journalServiceSettings from '../../services/journalServiceSettings';
import Loading from '../../components/Loading';
import DefaultLayout from '../../layouts/DefaultLayout';
import DestinationHeader from '../../components/DestinationHeader';
import JournalsList from '../../components/JournalsList';
import Sidebar from '../../components/Sidebar';
import style from './index.module.css';
import CreateJournal from '../../components/Sidebar/CreateJournal';
import Search from '../../components/Search';
import FiltersSection from '../../components/Sidebar/FiltersSection';
import useQuery from '../../hooks/useQuery';
import Container from '../../components/Container';

export default function Catalogue() {
  const { searchParams, onQuery } = useQuery();
  const { destination } = useParams();
  const [isSearching, setIsSearching] = useState(false);

  const getJournalsSettings = useCallback(() => {
    const search = searchParams.get('search');
    return journalServiceSettings.getJournalsSettings(destination, search);
  }, [destination, searchParams]);

  const {
    data: journals,
    isSuccess: journalsSuccess,
    error: journalsError,
    isLoading: journalsLoading,
  } = useFetch(getJournalsSettings);

  const {
    data: destinations,
    isSuccess: destinationsSuccess,
    error: destinationsError,
  } = useFetch(journalServiceSettings.getDestinationsSettings);

  if (!journalsSuccess || !destinationsSuccess) {
    return <Loading />;
  }

  const handleSearching = () => {
    setIsSearching(true);
  };

  const currentDestination = destination
    ? destinations.data.find((destinationFilter) => destinationFilter.name === destination)
    : null;

  return (
    <DefaultLayout>
      <DestinationHeader destination={currentDestination} />
      <div className={style.wrapper}>

        <div className={style['journals-container']}>
          {isSearching && journalsLoading
            && <Loading />}

          {!journalsLoading
            && <JournalsList journals={journals.data.journals} />}
        </div>

        <Sidebar width="20em">
          <CreateJournal />
          <Search
            isSearching={isSearching}
            onSearching={handleSearching}
            urlSearch={searchParams.get('search')}
            onQuery={onQuery}
          />
          <FiltersSection destinations={destinations.data} />
        </Sidebar>

      </div>
    </DefaultLayout>
  );
}
