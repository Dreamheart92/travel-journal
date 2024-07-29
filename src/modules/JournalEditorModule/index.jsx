import JournalEditorLayout from '../../layouts/JournalEditorLayout';
import FormProvider from '../../context/FormContext';
import JournalForm from '../../forms/JournalForm';
import { buildFormInitialState } from '../../helpers';

export default function JournalEditorModule({ settings }) {
  const {
    title,
    caption,
    buttonCaption,
    isSubmitting,
    submitCallback,
    requestError,
    journal,
  } = settings;

  const formInitialState = buildFormInitialState(journal);

  return (
  );
}
