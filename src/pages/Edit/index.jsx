import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import { PATHS } from '../../constants/paths';
import crudKeys from '../../store/crud/types';
import { selectJournalEntry } from '../../store/entries/selectors';
import JournalEditorModule from '../../modules/JournalEditorModule';
import useCrud from '../../hooks/useCrud';
import { crudActions } from '../../store/crud';

export default function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { journalId } = useParams();

  const { result: journal, loading: journalLoading } = useSelector(selectJournalEntry);

  const {
    loading: isUpdating,
    success: isUpdatedJournal,
    error,
    updateJournal,
  } = useCrud(crudKeys.UPDATE);

  useEffect(() => {
    if (isUpdatedJournal) {
      navigate(`${PATHS.DETAILS}/${journalId}`);
    }

    return () => {
      dispatch(crudActions.resetState());
    };
  }, [isUpdatedJournal]);

  const handleUpdateJournalSubmit = async (journalData) => {
    updateJournal(journalData, journalId);
  };

  if (journalLoading || !journal) {
    return <Loading />;
  }

  const settings = {
    title: 'Refine Your Story!',
    caption: 'Update your travel journal to reflect your latest adventures and insights. Edit your stories, photos, and experiences to keep your journey alive and inspiring.',
    buttonCaption: 'Edit',
    submitCallback: handleUpdateJournalSubmit,
    isSubmitting: isUpdating,
    requestError: error,
    journal,
  };

  return <JournalEditorModule settings={settings} />;
}
