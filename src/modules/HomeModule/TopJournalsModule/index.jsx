import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectHomeJournals } from '../../../store/journals/selectors';
import { fetchLatestAndMostLikedJournals } from '../../../store/journals/services';
import { JOURNALS_STATE_KEYS } from '../../../constants/redux';
import TopJournalsGrid from '../components/TopJournalsGrid';
import { journalsActions } from '../../../store/journals';

export default function TopJournalsModule() {
  return (
  );
}
