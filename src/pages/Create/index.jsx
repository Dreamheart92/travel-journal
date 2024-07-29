import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { crudActions } from '../../store/crud';
import crudKeys from '../../store/crud/types';
import { selectCreateState } from '../../store/crud/selectors';
import { postJournalRequest } from '../../store/crud/services';
import crudActionsConstants from '../../constants/crudActionsConstants';
import { buildJournalFormData } from '../../helpers';
import { PATHS } from '../../constants/paths';
import JournalEditorModule from '../../modules/JournalEditorModule';

export default function Create() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: journalData,
    loading: isSubmitting,
    success,
    error,
  } = useSelector(selectCreateState);

  useEffect(() => {
    dispatch(crudActions.resetState({ key: crudKeys.CREATE }));
    if (success) {
      navigate(`${PATHS.DETAILS}/${journalData._id}`);
    }
  }, [success]);

  const handleCreateJournalSubmit = (formData) => {
    dispatch(postJournalRequest({
      key: crudKeys.CREATE,
      currentAction: crudActionsConstants.POST_JOURNAL,
      journalData: buildJournalFormData(formData),
    }));
  };

  const settings = {
    title: 'Share your journey!',
    caption: 'Create your travel journal and capture every moment of your adventure. Share your stories, photos, and experiences with the world.',
    buttonCaption: 'Create',
    isSubmitting,
    submitCallback: handleCreateJournalSubmit,
    requestError: error,
  };

  return <JournalEditorModule settings={settings} />;
}
