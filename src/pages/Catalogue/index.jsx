import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DefaultLayout from '../../layouts/DefaultLayout';
import DestinationHeader from '../../modules/CatalogueModule/components/DestinationHeader';
import style from './index.module.css';
import useQuery from '../../hooks/useQuery';
import { selectIsAuthenticated } from '../../store/auth/selectors';
import useDestinations from '../../hooks/useDestinations';
import CatalogueListModule from '../../modules/CatalogueModule/CatalogueListModule';
import CatalogueSidebarModule from '../../modules/CatalogueModule/CatalogueSidebarModule';

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
    </DefaultLayout>
  );
}
