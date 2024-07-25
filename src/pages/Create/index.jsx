import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { buildJournalFormData } from '../../helpers';
import JournalEditor from '../../components/JournalEditor';
import { PATHS } from '../../constants/paths';
import { postJournalRequest } from '../../store/crud/thunks';
import crudConstants from '../../constants/crudConstants';
import crudActionsConstants from '../../constants/crudActionsConstants';
import { selectCreateState } from '../../store/crud/selectors';

export default function Create() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector(selectCreateState);

  const handleCreateSubmit = async (journalData) => {
    const isSuccess = await dispatch(postJournalRequest({
      key: crudConstants.CREATE,
      currentAction: crudActionsConstants.POST_JOURNAL,
      journalData: buildJournalFormData(journalData),
    }));

    if (isSuccess?.payload?.success) {
      navigate(`${PATHS.DETAILS}/${isSuccess.payload.data._id}`);
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
