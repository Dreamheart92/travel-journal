import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import DestinationsModule from '../../modules/HomeModule/DestinationsModule';
import LatestJournalsModule from '../../modules/HomeModule/LatestJournalsModule';
import { journalsActions } from '../../store/journals';
import entriesKeys from '../../store/journals/types';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => () => dispatch(journalsActions.resetState({ key: entriesKeys.JOURNAL_ENTRIES })));

  return (
    <Container customStyle={{ width: '100%' }}>
      <Hero />
      <DestinationsModule />
      <LatestJournalsModule />
    </Container>
  );
}
