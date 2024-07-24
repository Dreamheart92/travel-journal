import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import JournalEditor from '../../components/JournalEditor';
import { selectDetailsState } from '../../store/details/selectors';
import { fetchJournalById } from '../../store/details/thunks';
import Loading from '../../components/Loading';
import { updateJournal } from '../../store/journalEditor/thunks';
import { selectUpdateState } from '../../store/journalEditor/selectors';
import { PATHS } from '../../constants/paths';
import { journalEditorActions } from '../../store/journalEditor';
import { buildJournalFormData } from '../../helpers';

export default function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { journalId } = useParams();

  const { journal, loading: journalLoading } = useSelector(selectDetailsState);
  const { loading: isUpdating, success: isJournalUpdated } = useSelector(selectUpdateState);
  useEffect(() => {
    dispatch(fetchJournalById(journalId));
  }, []);

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
