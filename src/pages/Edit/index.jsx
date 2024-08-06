import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import { PATHS } from '../../constants/paths';
import { CRUD_STATE_KEYS } from '../../constants/redux';
import JournalEditorModule from '../../modules/JournalEditorModule';
import useCrud from '../../hooks/useCrud';
import { crudActions } from '../../store/crud';
import { destinationsActions } from '../../store/destinations';
import { selectJournal } from '../../store/journals/selectors';

export default function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { journalId } = useParams();

  const {
    results: journal,
    loading: journalLoading,
  } = useSelector(selectJournal);

  const {
    data: updatedJournal,
    loading: isUpdating,
    success: isJournalUpdated,
    error,
    updateJournal,
  } = useCrud(CRUD_STATE_KEYS.UPDATE);

  useEffect(() => {
    if (isJournalUpdated) {
      dispatch(destinationsActions.updateDestinationCountOnJournalEdit({
        oldDestinationId: journal.destination._id,
        newDestinationId: updatedJournal.destination,
      }));

      navigate(`${PATHS.DETAILS}/${journalId}`);
    }

    return () => {
      dispatch(crudActions.resetState());
    };
  }, [isJournalUpdated]);

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
