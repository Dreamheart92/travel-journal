import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JournalEditor from '../../components/JournalEditor';
import { crudActions } from '../../store/crud';
import crudKeys from '../../store/crud/types';
import FormProvider from '../../context/FormContext';
import { selectCreateState } from '../../store/crud/selectors';
import { postJournalRequest } from '../../store/crud/services';
import crudActionsConstants from '../../constants/crudActionsConstants';
import { buildJournalFormData } from '../../helpers';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';

export default function Create() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: journalData,
    loading,
    success,
    error
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

  return (
    <FormProvider>
      <JournalEditor
        title="Share your journey!"
        caption="Create your travel journal and capture every moment of your adventure. Share your stories,
                photos, and experiences with the world."
        buttonCaption="Create"
        submitCallback={handleCreateJournalSubmit}
        isSubmitting={loading}
        requestError={error}
      />
    </FormProvider>
  );
}
