import Container from '../Container';
import InfoBlock from '../InfoBlock';
import DefaultLayout from '../../layouts/DefaultLayout';
import JournalForm from '../../forms/JournalForm';
import { buildFormInitialState } from '../../helpers';

export default function JournalEditor(
  {
    title,
    caption,
    type,
    submitCallback,
    error,
    isSubmitting,
    journal,
  },
) {
  const formInitialState = buildFormInitialState(journal);

  return (
    <DefaultLayout>
      <Container>
        <InfoBlock
          caption={caption}
          title={title}
          paddingBottom="2em"
        />

        <JournalForm
          type={type}
          error={error}
          isSubmitting={isSubmitting}
          submitCallback={submitCallback}
          initialState={formInitialState}
        />
      </Container>
    </DefaultLayout>
  );
}
