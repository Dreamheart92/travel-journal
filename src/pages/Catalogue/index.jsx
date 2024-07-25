import { useSelector } from 'react-redux';
import { useState } from 'react';
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
import { selectDestinations } from '../../store/destinations/selectors';

export default function Catalogue() {
  const { searchParams, onQuery } = useQuery();
  const { destination } = useParams();
  const [isSearching, setIsSearching] = useState(false);

  const { destinations } = useSelector(selectDestinations);

  const handleSearching = () => {
    setIsSearching(true);
  };

  const currentDestination = destination
    ? destinations.find((destinationFilter) => destinationFilter.name === destination)
    : null;

  return (
    <DefaultLayout>
      <DestinationHeader destination={currentDestination} />
      <div className={style.wrapper}>

        <div className={style['journals-container']}>
          <JournalsList destination={destination} searchParams={searchParams} />
        </div>

        <Sidebar width="20em">
          <CreateJournal />
          <Search
            isSearching={isSearching}
            onSearching={handleSearching}
            urlSearch={searchParams.get('search')}
            onQuery={onQuery}
          />
          <FiltersSection />
        </Sidebar>

      </div>
    </DefaultLayout>
  );
}
