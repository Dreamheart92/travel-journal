import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import { PATHS } from '../../constants/paths';
import { buildJournalFormData } from '../../helpers';
import { updateJournalRequest } from '../../store/crud/services';
import crudKeys from '../../store/crud/types';
import crudActionsConstants from '../../constants/crudActionsConstants';
import { selectUpdateState } from '../../store/crud/selectors';
import { selectJournalEntry } from '../../store/entries/selectors';
import { crudActions } from '../../store/crud';
import JournalEditorModule from '../../modules/JournalEditorModule';

export default function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { journalId } = useParams();

  const { result: journal, loading: journalLoading } = useSelector(selectJournalEntry);

  const { loading: isUpdating, success, error } = useSelector(selectUpdateState);

  useEffect(() => {
    dispatch(crudActions.resetState({ key: crudKeys.UPDATE }));

    if (success) {
      navigate(`${PATHS.DETAILS}/${journalId}`);
    }
  }, [success]);

  const handleUpdateJournalSubmit = async (journalData) => {
    dispatch(updateJournalRequest({
      key: crudKeys.UPDATE,
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
