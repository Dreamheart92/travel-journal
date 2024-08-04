import { useParams } from 'react-router-dom';
import style from './index.module.css';
import useQuery from '../../hooks/useQuery';
import CatalogueListModule from '../../modules/CatalogueModule/CatalogueListModule';
import CatalogueSidebarModule from '../../modules/CatalogueModule/CatalogueSidebarModule';
import Container from '../../components/Container';
import DestinationBanner from '../../modules/CatalogueModule/components/DestinationBanner';

export default function Catalogue() {
  const { destination } = useParams();

  const { searchParams, onQuery } = useQuery();

  return (
    <Container customStyle={{ paddingBottom: '5em' }}>

      <DestinationBanner destination={destination} />

      <div className={style.wrapper}>

        <CatalogueListModule
          onQuery={onQuery}
          destination={destination}
          searchParams={searchParams}
        />

        <CatalogueSidebarModule
          onQuery={onQuery}
        />

      </div>
    </Container>
  );
}
