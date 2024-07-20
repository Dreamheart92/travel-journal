import { useCallback } from 'react';
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

export default function Catalogue() {
  const { destination } = useParams();

  const {
    data: journals,
    isSuccess: journalsSuccess,
    error: journalsError,
  } = useFetch(useCallback(() => journalServiceSettings.getJournalsSettings(destination), [destination]));

  const {
    data: destinations,
    isSuccess: destinationsSuccess,
    error: destinationsError,
  } = useFetch(journalServiceSettings.getDestinationsSettings);

  if (!journalsSuccess || !destinationsSuccess) {
    return <Loading />;
  }

  const currentDestination = destination
    ? destinations.data.find((destinationFilter) => destinationFilter.name === destination)
    : null;

  return (
    <DefaultLayout>
      <DestinationHeader destination={currentDestination} />
      <div className={style.wrapper}>
        <JournalsList journals={journals.data.journals} />

        <Sidebar width="20em">
          <CreateJournal />
          <Search />
          <FiltersSection destinations={destinations.data} />
        </Sidebar>

      </div>
    </DefaultLayout>
  );
}
