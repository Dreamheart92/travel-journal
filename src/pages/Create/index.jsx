import { useDispatch, useSelector } from 'react-redux';
import { postJournal } from '../../store/journalEditor/thunks';
import { buildJournalFormData } from '../../helpers';

import JournalEditor from '../../components/JournalEditor';
import { selectCreateState } from '../../store/journalEditor/selectors';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';

export default function Create() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector(selectCreateState);

  const handleCreateSubmit = async (journalData) => {
    const requestResponse = await dispatch(postJournal(buildJournalFormData(journalData)));
    const fetchedJournal = requestResponse.payload?.data;

    if (fetchedJournal) {
      navigate(`${PATHS.DETAILS}/${fetchedJournal._id}`);
    }
  };

  return (
    <JournalEditor
      title="Share your journey!"
      caption="Create your travel journal and capture every moment of your adventure. Share your stories,
                photos, and experiences with the world."
      type="Create"
      submitCallback={handleCreateSubmit}
      isSubmitting={loading}
    />
  );
}
