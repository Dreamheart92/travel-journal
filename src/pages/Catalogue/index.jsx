import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DestinationHeader from '../../modules/CatalogueModule/components/DestinationHeader';
import style from './index.module.css';
import useQuery from '../../hooks/useQuery';
import { selectIsAuthenticated } from '../../store/auth/selectors';
import useDestinations from '../../hooks/useDestinations';
import CatalogueListModule from '../../modules/CatalogueModule/CatalogueListModule';
import CatalogueSidebarModule from '../../modules/CatalogueModule/CatalogueSidebarModule';
import { entriesActions } from '../../store/entries';
import entriesKeys from '../../store/entries/types';
import Container from '../../components/Container';

export default function Catalogue() {
  const dispatch = useDispatch();

  const { destination } = useParams();
  const { destinations } = useDestinations();

  const { searchParams, onQuery } = useQuery();

  const isAuthenticated = useSelector(selectIsAuthenticated);

  const currentDestination = destination
    ? destinations.find((destinationFilter) => destinationFilter.name === destination)
    : null;

  useEffect(() => () => dispatch(entriesActions.resetState({ key: entriesKeys.JOURNAL_ENTRIES })));

  return (
    <Container customStyle={{ paddingBottom: '5em' }}>

      <DestinationHeader destination={currentDestination} />

      <div className={style.wrapper}>

        <CatalogueListModule
          onQuery={onQuery}
          destination={destination}
          searchParams={searchParams}
        />

        <CatalogueSidebarModule
          isAuthenticated={isAuthenticated}
          onQuery={onQuery}
        />

      </div>
    </Container>
  );
}
