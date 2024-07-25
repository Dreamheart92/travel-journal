import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { buildJournalFormData } from '../../helpers';
import JournalEditor from '../../components/JournalEditor';
import { PATHS } from '../../constants/paths';
import { postJournalRequest } from '../../store/crud/thunks';
import crudConstants from '../../constants/crudConstants';
import crudActionsConstants from '../../constants/crudActionsConstants';
import { selectCreateState } from '../../store/crud/selectors';
import { crudActions } from '../../store/crud';

export default function Create() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: newJournalEntry,
    loading,
    success,
    error,
  } = useSelector(selectCreateState);

  useEffect(() => {
    dispatch(crudActions.resetState({ key: crudConstants.CREATE }));

    if (success) {
      navigate(`${PATHS.DETAILS}/${newJournalEntry._id}`);
    }
  }, [success]);

  const handleCreateSubmit = (journalData) => {
    dispatch(postJournalRequest({
      key: crudConstants.CREATE,
      currentAction: crudActionsConstants.POST_JOURNAL,
      journalData: buildJournalFormData(journalData),
    }));
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
