import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import style from './index.module.css';
import useQuery from '../../hooks/useQuery';
import CatalogueListModule from '../../modules/CatalogueModule/CatalogueListModule';
import CatalogueSidebarModule from '../../modules/CatalogueModule/CatalogueSidebarModule';
import { journalsActions } from '../../store/journals';
import { JOURNALS_STATE_KEYS } from '../../constants/redux';
import Container from '../../components/Container';
import DestinationBanner from '../../modules/CatalogueModule/components/DestinationBanner';

export default function Catalogue() {
  const dispatch = useDispatch();

  const { destination } = useParams();

  const { searchParams, onQuery } = useQuery();

  useEffect(() => () => dispatch(journalsActions.resetState({ key: JOURNALS_STATE_KEYS.JOURNALS })));

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
