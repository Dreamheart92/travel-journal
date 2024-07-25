import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import JournalEditor from '../../components/JournalEditor';
import Loading from '../../components/Loading';
import { PATHS } from '../../constants/paths';
import { buildJournalFormData } from '../../helpers';
import { updateJournalRequest } from '../../store/crud/thunks';
import crudConstants from '../../constants/crudConstants';
import crudActionsConstants from '../../constants/crudActionsConstants';
import { selectUpdateState } from '../../store/crud/selectors';
import { fetchEntry } from '../../store/entries/thunks';
import { selectJournalEntry } from '../../store/entries/selectors';
import { crudActions } from '../../store/crud';

export default function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { journalId } = useParams();

  const { result: journal, loading: journalLoading } = useSelector(selectJournalEntry);

  const { loading: isUpdating, success } = useSelector(selectUpdateState);

  useEffect(() => {
    dispatch(fetchEntry({ journalId }));
  }, []);

  useEffect(() => {
    dispatch(crudActions.resetState({ key: crudConstants.UPDATE }));

    if (success) {
      navigate(`${PATHS.DETAILS}/${journalId}`);
    }
  }, [success]);

  const handleUpdateJournalSubmit = async (journalData) => {
    dispatch(updateJournalRequest({
      key: crudConstants.UPDATE,
      currentAction: crudActionsConstants.UPDATE_JOURNAL,
      journalMetaData: {
        journalData: buildJournalFormData(journalData),
        journalId,
      },
    }));
  };

  if (journalLoading || !journal) {
    return <Loading />;
  }

  return (
    <JournalEditor
      title="Refine Your Story!"
      caption="Update your travel journal to reflect your latest adventures and insights. Edit your stories, photos, and experiences to keep your journey alive and inspiring."
      type="Edit"
      journal={journal}
      submitCallback={handleUpdateJournalSubmit}
      isSubmitting={isUpdating}
    />
  );
}
