import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { crudActions } from '../../store/crud';
import crudKeys from '../../store/crud/types';
import { PATHS } from '../../constants/paths';
import JournalEditorModule from '../../modules/JournalEditorModule';
import useCrud from '../../hooks/useCrud';

export default function Create() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: journalData,
    loading: isSubmitting,
    success,
    error,
    postJournal,
  } = useCrud(crudKeys.CREATE);

  useEffect(() => {
    dispatch(crudActions.resetState({ key: crudKeys.CREATE }));

    if (success) {
      navigate(`${PATHS.DETAILS}/${journalData._id}`);
    }
  }, [success]);

  const handleCreateJournalSubmit = (formData) => {
    postJournal(formData);
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
