import Container from '../Container';
import InfoBlock from '../InfoBlock';
import DefaultLayout from '../../layouts/DefaultLayout';
import JournalForm from '../../forms/JournalForm';

export default function JournalEditor(
  {
    title,
    caption,
    type,
    submitCallback,
    error,
    isSubmitting,
  },
) {
  return (
    <DefaultLayout>
      <Container>
        <InfoBlock caption={caption} title={title} />
      </Container>
    </DefaultLayout>
  );
}
