import JournalEditorLayout from '../../layouts/JournalEditorLayout';
import FormProvider from '../../context/FormContext';
import JournalForm from './Forms/JournalForm';
import { buildFormInitialState } from '../../utils/formDataUtils';

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
    <FormProvider>
      <JournalEditorLayout
        title={title}
        caption={caption}
      >

        <JournalForm
          buttonCaption={buttonCaption}
          isSubmitting={isSubmitting}
          submitCallback={submitCallback}
          initialState={formInitialState}
          requestError={requestError}
        />

      </JournalEditorLayout>
    </FormProvider>
  );
}
