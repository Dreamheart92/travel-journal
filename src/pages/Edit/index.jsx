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

export default function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { journalId } = useParams();

  const { result: journal, loading: journalLoading } = useSelector(selectJournalEntry);
  const { loading: isUpdating } = useSelector(selectUpdateState);

  const handleUpdateJournalSubmit = async (journalData) => {
    const isSuccess = await dispatch(updateJournalRequest({
      key: crudConstants.UPDATE,
      currentAction: crudActionsConstants.UPDATE_JOURNAL,
      journalMetaData: {
        journalData: buildJournalFormData(journalData),
        journalId,
      },
    }));

    if (isSuccess?.payload?.data) {
      navigate(`${PATHS.DETAILS}/${journalId}`);
    }
  };

  useEffect(() => {
    dispatch(fetchJournalById(journalId));
  }, []);

  useEffect(() => {
    if (isJournalUpdated) {
      navigate(`${PATHS.DETAILS}/${journalId}`);
    }


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
