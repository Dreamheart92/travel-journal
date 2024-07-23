import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
import { selectDestinations } from '../../store/destinations/selectors';
import { selectCatalogue } from '../../store/catalogue/selectors';
import { fetchCatalogue } from '../../store/catalogue/thunks';
import { catalogueActions } from '../../store/catalogue';

export default function Catalogue() {
  const dispatch = useDispatch();
  const { searchParams, onQuery } = useQuery();
  const { destination } = useParams();
  const [isSearching, setIsSearching] = useState(false);

  const {
    catalogue,
    loading,
  } = useSelector(selectCatalogue);

  const { destinations } = useSelector(selectDestinations);

  useEffect(() => {
    const search = searchParams.get('search');
    dispatch(fetchCatalogue({ search, destination }));

    return () => {
      dispatch(catalogueActions.resetState());
    };
  }, [destination, searchParams]);

  const handleSearching = () => {
    setIsSearching(true);
  };

  const currentDestination = destination
    ? destinations.find((destinationFilter) => destinationFilter.name === destination)
    : null;

  if (loading || !catalogue) {
    return <Loading />;
  }

  return (
    <DefaultLayout>
      <DestinationHeader destination={currentDestination} />
      <div className={style.wrapper}>

        <div className={style['journals-container']}>
          {/*{isSearching && journalsLoading*/}
          {/*  && <Loading />}*/}

          <JournalsList journals={catalogue} />
        </div>

        <Sidebar width="20em">
          <CreateJournal />
          <Search
            isSearching={isSearching}
            onSearching={handleSearching}
            urlSearch={searchParams.get('search')}
            onQuery={onQuery}
          />
          <FiltersSection destinations={destinations} />
        </Sidebar>

      </div>
    </DefaultLayout>
  );
}
