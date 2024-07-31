import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import DestinationsModule from '../../modules/HomeModule/DestinationsModule';
import LatestJournalsModule from '../../modules/HomeModule/LatestJournalsModule';
import { entriesActions } from '../../store/entries';
import entriesKeys from '../../store/entries/types';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => () => dispatch(entriesActions.resetState({ key: entriesKeys.JOURNAL_ENTRIES })));

  return (
    <Container customStyle={{ width: '100%' }}>
      <Hero />
      <DestinationsModule />
      <LatestJournalsModule />
    </Container>
  );
}
